import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
  const { signInUsingGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin } = useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_uri = location.state?.from || '/home'
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
  }

  return (
    <div className='login'>
      <h2 className='pb-3'>Please {isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleRegistration} className='mx-5'>
        <div className="row mb-3">
          <h4 className='text-primary text-start'>Please enter your email</h4>
          <div className="col-sm-10 mb-4">
            <input onBlur={handleEmailChange} type="email" className="form-control input-field" id="email" autoComplete="current-email" placeholder='Enter your email
      ' required />
          </div>
        </div>
        <div className="row mb-3">
          <h4 className='text-primary text-start'>Please enter your password</h4>
          <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control input-field" id="password" placeholder='Enter your password' autoComplete="current-password" required />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input check" type="checkbox" id="gridCheck1" />
              <label className="form-check-label check" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">{error}</div>
        <button type="submit" className="btn btn-primary ">{isLogin ? 'Login' : 'Register'}</button>
        <button onClick={handleGoogleLogin} className='btn btn-primary ms-3'>Sign with Google</button>
      </form>


    </div>
  );
};

export default Login;