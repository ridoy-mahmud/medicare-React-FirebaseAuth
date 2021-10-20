import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="text-center text-primary fw-bold">Contact</h1>
            <hr className="w-25 d-flex mx-auto fs-1" style={{ border: "2px solid blue" }} />
            <div className="d-flex justify-content-center">
                <div className="w-50">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Address"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Send Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary">Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;