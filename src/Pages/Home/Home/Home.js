import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
            <Hero></Hero>
        </div>
    );
};

export default Home;