import React from 'react';
import doctorImage from '../../../assets/images/doctor.png'
import backgroundImage from '../../../assets/images/appointment.png'
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';


const MakeAppointment = () => {
    return (
        <section className='mt-20' style={{ background: `url(${backgroundImage})`}}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctorImage} className="-mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt='doctor' />
                    <div className='text-white'>
                        <h1 className='text-xl text-primary font-bold'>Appoinment</h1>
                        <h1 className="text-4xl font-bold my-5">Make an appointment Today</h1>
                        <p className="py-6 font-thin md:font-normal">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem Ipsumis
                            that it has a more-or-less normal distribution of letters,as opposed to using
                            'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page</p>
                      <PrimaryButtons>Make Appoinment</PrimaryButtons>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;