import React from 'react';
import reviewerImage1 from '../../../assets/images/people1.png'
import reviewerImage2 from '../../../assets/images/people2.png'
import reviewerImage3 from '../../../assets/images/people3.png'
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-32'>
            {
                patientsReviews.map(review=> <PatientsReviewCard key={review.id} review={review}></PatientsReviewCard>)
            }
        </div>
    );
};

export default PatientsReview;