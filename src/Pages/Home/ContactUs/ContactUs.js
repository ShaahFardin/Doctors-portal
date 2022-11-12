import React from 'react';
import contactUsBackground from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url(${contactUsBackground})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="p-">
                    <div>
                        <h1 className='text-xl font-bold text-primary'>ContactUs</h1>
                        <p className='text-3xl mb-5'>Stay connected with us</p>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl ">

                        <div className="card-body">
                            <div className="form-control">

                                <input type="text" placeholder="email" className="input input-bordered" />

                                <input type="text" placeholder="subject" className="input input-bordered" />

                                <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;


<div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">


    </div>
</div>