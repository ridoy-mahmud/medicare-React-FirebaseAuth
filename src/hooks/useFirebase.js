import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({})
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const[isLogin,setIsLogin]=useState(false)
    const [isLoading,setIsLoading]=useState(true)

    const auth=getAuth()

    const signInUsingGoogle=()=>{
        
        setIsLoading(true)
        const googleProvider=new GoogleAuthProvider()
       return signInWithPopup(auth,googleProvider)
        // .then(result=>{
        //     setUser(result.user)
        // })
        .finally(()=>setIsLoading(false))

    }
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        }).finally(()=>setIsLoading(false))
    }
     
   useEffect(()=>{
    const unsubscribed= onAuthStateChanged(auth, (user) => {
         if (user) {
          setUser(user)
           
         }
          else{
             setUser({})
         } setIsLoading(false)
        
       });
       return ()=>unsubscribed;
    },[auth])

    
    const toggleLogin=(e)=>{
        setIsLogin(e.target.checked)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleRegistration=(e)=>{
        e.preventDefault();
        console.log(email,password);
        if(password.length<6){
            setError('Password must be 6 character long.')
            return;
        }
       
        isLogin?processLogin(email,password) :registerNewUser(email,password)
    }

    const processLogin=(email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
           setError('')
        }).catch(error=>{
            setError(error.message)
        })
    }
    const registerNewUser=(email,password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user=result.user
        console.log(user)
        setError('')
    }).catch(error=>{
        setError(error.message)
    })
    }

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        toggleLogin,
        isLogin
    }
}
export default useFirebase;