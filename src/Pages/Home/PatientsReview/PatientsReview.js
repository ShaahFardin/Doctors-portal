import React from 'react';
import reviewerImage1 from '../../../assets/images/people1.png'
import reviewerImage2 from '../../../assets/images/people2.png'
import reviewerImage3 from '../../../assets/images/people3.png'
import reveiwIcon from '../../../assets/icons/quote.svg'
import PatientsReviewCard from './PatientsReviewCard';

const patientsReviews = [
    {
        id: 1,
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        reviewerImage: reviewerImage1,
        reviwerName: "Elon Musk",
        address: 'Ohio, USA'
    },
    {
        id: 2,
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        reviewerImage: reviewerImage2,
        reviwerName: "Khabib Normagomedov",
        address: 'Texas, USA'
    },
    {
        id: 3,
        description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        reviewerImage: reviewerImage3,
        reviwerName: "Islam Makhachev",
        address: 'California, USA'
    },
]

const PatientsReview = () => {
    return (
        <div  className='my-32'>
            <div className='flex justify-between items-center my-10'>
                <div className=''>
                    <h1 className='font-bold text-primary '>Testimonials</h1>
                    <p className='text-3xl '>What Our Patients Says</p>
                </div>
                <img className='w-24 lg:w-48 h-40' src={reveiwIcon} alt=''/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    patientsReviews.map(review => <PatientsReviewCard key={review.id} review={review}></PatientsReviewCard>)
                }
            </div>
        </div>
    );
};

export default PatientsReview;