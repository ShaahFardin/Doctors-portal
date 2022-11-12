import React from 'react';
import { format } from 'date-fns';


const AvailableAppoinmets = ({ selectedDate}) => {
    return (
        <div>
            <h1 className='text-xl text-secondary text-center my-5'>Appoinment available on : {format(selectedDate, "PP")}</h1>
        </div>
    );
};

export default AvailableAppoinmets;