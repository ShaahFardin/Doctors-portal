import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
            <Hero></Hero>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;