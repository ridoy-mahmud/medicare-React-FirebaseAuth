
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import'./Detail.css'


const Detail = () => {
   const{serviceId}=useParams()
    const [details,setDetails]=useState([])
    useEffect(()=>{
      fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setDetails(data));
   },[])
   
   const matchingService =details.find((detail) => detail.id = parseInt(serviceId));
  
   const {name,img,discription}=matchingService||{};
  
  return (
      <div className=' container-fluid detail'>
        <div className='row'>
           <div className='col-lg-12 col-md-6 col-12'>
           <h2 className='pb-3'>This orthopedic disease name: <span className='text-success fs-1'>{name}</span></h2>
        <img className='img-fluid' src={img} alt="" />
        <p className='text-primary pt-5 fs-3'>{discription}</p>
           </div>
        </div>
       </div>
    );
};

export default Detail;