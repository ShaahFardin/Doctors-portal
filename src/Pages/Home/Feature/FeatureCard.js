import React from 'react';

const FeatureCard = ({ feature }) => {

    const { title, icon, description, background } = feature;

    return (
        <div className={`rounded-xl h-[170px] ${background} flex justify-evenly items-center`}>
            <img className='h-16 w-20' src={icon} alt='' />
            <div className='text-white'>
                <h1 className='text-xl font-bold mb-2'>{title}</h1>
                <p>{description} </p>
            </div>
        </div>
    );
};

export default FeatureCard;