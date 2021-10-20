import React from 'react';
import './Need.css'

const Need = () => {
  return (
    <div className='need my-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-12 pt-5">
            <h2 className="text-primary">Welcome to Medicare</h2>
            <h3>We offer specialized orthopedics to meet your needs</h3>
            <p className='text-dark'>From routine doctor visits to the most advanced procedures, we’re here for you. Our physicians specialize in orthopedic surgery and handle the diagnosis and treatment of injuries of the bones, muscles and ligaments in both adults and children.
            </p>
          </div>
          <div className="col-lg-6 col-12 col-md-12 pt-2">
            <div >
              <img className='img-fluid' src="https://blog.ipleaders.in/wp-content/uploads/2018/02/BV-Acharya-3.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Need;