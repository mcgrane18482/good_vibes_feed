import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [donationAmount, setDonationAmount] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [thankYouMessage, setThankYouMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null || !stripe) {
            return;
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            return;
        }

        const amountInCents = parseFloat(donationAmount) * 100;


        const { data: { client_secret } } = await axios.post('/create-intent', {
            amount: amountInCents
        });

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret: client_secret,
            confirmParams: {
                return_url: 'https://good-vibes-feed-0f727cb91a84.herokuapp.com/',
            },
            redirect: 'always'
        });

        if (error) {
            setErrorMessage(error.message);
        } else {
            setSubmitted(true);
            setThankYouMessage('Thank you for your donation!');
            setDonationAmount('');
        }
    };

    return (
        <form id='paymentForm' onSubmit={handleSubmit}>
            {submitted ? (
                <div>
                    <p>{thankYouMessage}</p>
                </div>
            ) : (
                <div>
                    <label>
                        Donation Amount ($):
                    </label>
                        <input
                            type="number"
                            step="0.01"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            required
                            className='paymentform-input'
                        />

                    <PaymentElement />

                    <button id='paymentButton' type="submit" disabled={!stripe || !elements}>
                        Pay
                    </button>

                    {errorMessage && <div>{errorMessage}</div>}
                </div>
            )}
        </form>
    );
};

const stripePromise = loadStripe('pk_test_51NfOh5E0uAKYbFOSiqWMS5UvQr2hskj3tcz2Rnh76OCjP8vXoW0NIFNDxktSP4itivOpsHIRlH6jVGhE4PVe1ORE00PwmjjFkk');

const options = {
    mode: 'payment',
    currency: 'usd',
    amount: 1099,

};

const StripePayment = () => {
    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    )
};

export default StripePayment;