import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h1 className='text-4xl font-thin mt-5'>Make your payment </h1>
        </div>
    );
};

export default Payment;