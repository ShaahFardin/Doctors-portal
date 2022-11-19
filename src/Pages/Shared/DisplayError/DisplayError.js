import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const {  logoutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        logoutUser()
            .then(() => alert("Logout successfull"))
            .catch((error) => console.log(error.message))
    }

    const error = useRouteError();

    return (
        <div>
            <h1 className='text-6xl font-bold '>Something went wrong</h1>
            <h1 className='text-xl font-bold text-red-500'>{error.statusText || error.message}</h1>
            <p>Please <button onClick={handleSignOut}>Sign Out</button> and log back in</p>
        </div>
    );
};

export default DisplayError;