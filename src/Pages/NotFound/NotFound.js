import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div>
                <img className="w-50" src="https://i.ibb.co/hHdzx9F/2676383.jpg" alt="" />
            </div>
            <Link to='/home'><button className='btn btn-primary text-white mt-3  mb-5'>Back to Home</button></Link>
        </div>
    );
};

export default NotFound;