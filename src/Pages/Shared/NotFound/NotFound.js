import React from 'react';
import error from '../../../Images/Error.gif'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-danger'>Mecanic is sleeping!!!</h2>
            <img width="100%" src={error} alt="" />
        </div>
    );
};

export default NotFound;