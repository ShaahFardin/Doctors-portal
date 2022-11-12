import React from 'react';

const PatientsReviewCard = ({ review }) => {


    const { reviewerImage, description, reviwerName, address } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='p-2'>{description}</p>
                <div className='flex items-center  mt-5'>
                    <div className="card-actions justify-start">
                        <img className='w-20 border-4 rounded-full border-green-500' src={reviewerImage} alt='' />
                    </div>
                    <div className='pl-5'>
                    <p className='font-bold '>{reviwerName}</p>
                    <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientsReviewCard;