import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import PatientsReview from '../PatientsReview/PatientsReview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
            <Hero></Hero>
            <MakeAppointment></MakeAppointment>
            <PatientsReview></PatientsReview>
        </div>
    );
};

export default Home;