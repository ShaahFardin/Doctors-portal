import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppoinmets from '../AvailableAppoinmets/AvailableAppoinmets';

const Appointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            >
            </AppoinmentBanner >
            <AvailableAppoinmets
                selectedDate={selectedDate}
            ></AvailableAppoinmets>
        </div>
    );
};

export default Appointment;