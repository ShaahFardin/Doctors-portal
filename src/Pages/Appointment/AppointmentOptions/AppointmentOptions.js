import React from 'react';
import PrimaryButtons from '../../../components/PrimaryButtons/PrimaryButtons';

const AppointmentOptions = ({ option, setTreatment }) => {

    const { name, slots } = option;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <div className='text-center my-3'>
                    <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
                    <p>
                        {slots.length} {slots.length > 1 ? "Spaces " : "Space "}
                        Available today
                    </p>
                </div>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;