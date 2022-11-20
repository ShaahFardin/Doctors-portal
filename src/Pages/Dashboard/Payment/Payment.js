import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderbooking, useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, slot, price, appointmentDate } = booking;

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
            <div className='w-96 mt-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;