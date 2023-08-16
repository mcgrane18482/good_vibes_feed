import React from 'react';
import PaymentForm from './PaymentForm';

const SupportUs = () => {
    return (
        <div className='text-center sticky-footer bg-gray-900'>
            <h2 className='margin-bottom header-one text-white'>Support Us</h2>
            <p className='margin-bottom header-three text-white'>Your support helps us continue spreading positivity!</p>
            <PaymentForm />
        </div>
    );
};

export default SupportUs;