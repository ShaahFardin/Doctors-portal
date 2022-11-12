import React from 'react';
import clockIcon from '../../../assets/icons/clock.svg'
import markerIcon from '../../../assets/icons/marker.svg'
import phoneIcon from '../../../assets/icons/phone.svg'
import FeatureCard from './FeatureCard';

const featureInfo = [
    {
        id:1,
        icon: clockIcon,
        title: "Opening Hours",
        background: "bg-gradient-to-r from-primary to-secondary",
        description: ' We are open from 10 am to 4 pm'
    },
    {
        id:2,
        icon: markerIcon,
        title: "Our Location",
        background: "bg-accent",
        description: ' We are open from 10 am to 4 pm'
    },
    {
        id:3,
        icon: phoneIcon,
        title: "Contact Us",
        background: "bg-gradient-to-r from-primary to-secondary",
        description: ' We are open from 10 am to 4 pm'
    },
]

const Feature = () => {
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-36'>
           
            {
                featureInfo.map(feature=> <FeatureCard key={feature.id} feature={feature}></FeatureCard>)
            }
        </div>
    );
};

export default Feature;