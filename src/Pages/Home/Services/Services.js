import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images//cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const serviceInfo = [
    {
        id: 1,
        image: flouride,
        title: 'Flouride Treatment',
        description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
        id: 2,
        image: cavity,
        title: 'Cavity Feeling',
        description: "If a dog chews shoes whose shoes does he choose?"
    },
    {
        id: 3,
        image: whitening,
        title: 'Tooth Whitening',
        description: "If a dog chews shoes whose shoes does he choose?"
    },
]

const Services = () => {
    return (
        <div>
            <div className='text-center mt-60'>
            <h1 className='text-xl font-bold text-primary'>OUR SERVICES</h1>
            <p className='text-4xl '>Services We provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-24'>
            {
                serviceInfo.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;