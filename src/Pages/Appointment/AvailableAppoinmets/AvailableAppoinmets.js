import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';


const AvailableAppoinmets = ({ selectedDate }) => {

    const [appoinmentOption, setAppoinmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appoinmentOption.json')
            .then(res => res.json())
            .then(data => setAppoinmentOption(data))
    }, [])

    return (
        <div>
            <h1 className='text-xl text-secondary text-center my-5'>
                Appoinment available on : {format(selectedDate, "PP")}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    appoinmentOption.map(option =>
                        <AppointmentOptions
                            key={option._id}
                            option={option}
                            setTreatment={setTreatment}
                        ></AppointmentOptions>)
                }
            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}>
                </BookingModal>
            }

        </div>
    );
};

export default AvailableAppoinmets;