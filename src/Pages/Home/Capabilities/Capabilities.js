import React from 'react';
import capability1 from '../../../images/capabilities/capa1.jpeg'
import capability2 from '../../../images/capabilities/capa2.jpg'
import capability3 from '../../../images/capabilities/capa3.jpg'
import './Capabilities.css'

const Capabilities = () => {
    return (
        <div className=' my-5 py-5'>
            <h2 className='text-primary mb-5'>Our Facilitys</h2>

            <div className='container capability'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <img className='img-fluid' src={capability1} alt="" />
                        <h2>Trader Comp</h2>
                        <p className='text-dark' >We have a dedicated department that coordinates all care.This quality care to the injured employee with the goal of returning them back to work safely and quickly.We try our best.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <img className='img-fluid' src={capability2} alt="" />
                        <h2>Orthopedics Center </h2>
                        <p className='text-dark'>Our Center provides patients with a convenient day surgery center. An alternative to the hospital is comfortable waiting rooms for family, and staffed with experienced doctors and nurses.</p>
                    </div>
                    <div className='col-lg-4 col-md-12 col-12'>
                        <img className='img-fluid' src={capability3} alt="" />
                        <h2>Tendons Therapy</h2>
                        <p className='text-dark'>Your recovery, fully integrated. Whether you want to get back to the athletic field, workplace or simply your daily routine,team of specialized therapists are passionate about helping you reach your goals.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Capabilities;