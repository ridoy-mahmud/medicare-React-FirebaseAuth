import React from 'react';
import Banner from '../Banner/Banner';
import Capabilities from '../Capabilities/Capabilities';
import Need from '../Need/Need';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Need></Need>
           <Services></Services>
           <Capabilities></Capabilities>
        </div>
    );
};

export default Home;