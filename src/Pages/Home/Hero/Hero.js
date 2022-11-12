import React from 'react';
import treatmentImage from '../../../assets/images/treatment.png'

const Hero = () => {
    return (

        <div className="flex bg-base-100 shadow-xl my-64">
            <div className='w-[460px] h-[576]'>
                <figure><img src={treatmentImage} alt="Album" /></figure>
            </div>
            <div className='w-1/2 flex items-center pl-20'>
                <div >
                    <h2 className='text-5xl font-bold my-5'>Exceptional Dental <br /> Care, on Your Terms</h2>
                    <p className='font-thin my-10'>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsumis that it has a more-or-less
                        normal distribution of letters,as opposed to using 'Content here,
                        content here', making it look like readable English.
                        Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Hero;