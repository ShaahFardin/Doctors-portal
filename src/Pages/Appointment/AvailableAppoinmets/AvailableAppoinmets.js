import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppoinmets = ({ selectedDate }) => {

    // const [appoinmentOption, setAppoinmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, "PP")

    const {data: appoinmentOption = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: ()=> fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res=>res.json())
    })
    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppoinmentOption(data.data))
    // }, [])

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
                refetch={refetch}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                    treatment={treatment}>
                </BookingModal>
            }

        </div>
    );
};

export default AvailableAppoinmets;