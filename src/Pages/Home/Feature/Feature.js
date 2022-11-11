import React from 'react';
import clockIcon from '../../../assets/icons/clock.svg'
import markerIcon from '../../../assets/icons/marker.svg'
import phoneIcon from '../../../assets/icons/phone.svg'

const Feature = () => {
    return (
        <div className='flex justify-evenly mt-36'>
            <div className="rounded-xl w-[400px] h-[170px] bg-primary flex justify-evenly items-center">
                <img className='h-20 w-20' src={clockIcon} alt='' />
                <div className='text-white'>
                    <h1 className='text-xl font-bold mb-2'>Opening Hours</h1>
                    <p>Lorem impusm king eide frage deutchland </p>
                </div>
            </div>
            <div className="rounded-xl w-[400px] h-[170px] bg-accent flex justify-evenly items-center">
                <img className='h-20 w-20' src={markerIcon} alt='' />
                <div className='text-white'>
                    <h1 className='text-xl font-bold mb-2'>Opening Hours</h1>
                    <p>Lorem impusm king eide frage deutchland </p>
                </div>
            </div>
            <div className="rounded-xl w-[400px] h-[170px] bg-primary flex justify-evenly items-center">
                <img className='h-20 w-20' src={phoneIcon} alt='' />
                <div className='text-white'>
                    <h1 className='text-xl font-bold mb-2'>Opening Hours</h1>
                    <p>Lorem impusm king eide frage deutchland </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;