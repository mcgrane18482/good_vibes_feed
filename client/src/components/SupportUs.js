import React from 'react';
import PaymentForm from './PaymentForm';

const SupportUs = () => {
    return (
        <div className='text-center sticky-footer'>
            <h2 className='margin-bottom header-one'>Support Us</h2>
            <p className='margin-bottom header-three'>Your support helps us continue spreading positivity!</p>
            <PaymentForm />
        </div>
    );
};

export default SupportUs;