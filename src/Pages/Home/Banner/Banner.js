import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <div className="banner d-flex  align-items-center">
                <div className="container w-50">
                    <h1 className="fw-bolder text-primary fs-2">We Provide Medical Services that you can trust</h1>
                    <div>
                        <p className="fw-normal">Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer hears tales of diamonds and begins dreaming of vast riches.

                            So, there you have it; the six steps that will help you to the fabled land of achievement and success! You now have the opportunity to push ahead and reach your potential. No more excuses – make the commitment to take action TODAY!</p>
                        <button className="btn btn-primary">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;