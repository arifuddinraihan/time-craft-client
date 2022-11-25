import React from 'react';
import ClockLoader from "react-spinners/ClipLoader";

const SpinnerPrimary = () => {
    return (
        <div className='flex justify-center min-h-16'>
            <ClockLoader color="#f59e0b"></ClockLoader>
        </div>
    );
};

export default SpinnerPrimary;