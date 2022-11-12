import React from 'react';
import bannerBanckgroundImage from '../../../assets/images/bg.png'
import bannerChairImage from '../../../assets/images/chair.png'
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';

const Banner = () => {
    return (
        <div className="hero mt-32" style={{ backgroundImage: `url(${bannerBanckgroundImage})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerChairImage} className="lg:max-w-xl rounded-lg shadow-2xl" alt='chair'/>
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <PrimaryButtons>Get Started</PrimaryButtons>
                </div>
            </div>
        </div>
    ); 
};

export default Banner;