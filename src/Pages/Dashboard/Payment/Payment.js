import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const data = useLoaderData();
    const {treatment, slot, price, appointmentDate} = data;

    return (
        <div>
            <h1 className='text-4xl font-thin mt-5'>
                Make your payment for 
                <span className='font-semibold text-blue-800'> {treatment}</span>
            </h1>
            <p className='my-5 text-blue-800'>
                Please pay <strong>${price}</strong>
                for your appoinment on {appointmentDate} at {slot}
            </p>
        </div>
    );
};

export default Payment;