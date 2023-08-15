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

        const res = await fetch('/create-intent', {
            method: 'POST',
            body: JSON.stringify({ amount: amountInCents }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const { client_secret: clientSecret } = await res.json();

        const { error } = await stripe.confirmPayment({
            clientSecret,
            confirmParams: {
                return_url: 'https://www.google.com',
            },
            payment_method: {
                card: elements.getElement(PaymentElement),
            },
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
        <form onSubmit={handleSubmit}>
            {submitted ? (
                <div>
                    <p>{thankYouMessage}</p>
                </div>
            ) : (
                <div>
                    <label>
                        Donation Amount ($):
                        <input
                            type="number"
                            step="0.01"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            required
                        />
                    </label>

                    <PaymentElement />

                    <button type="submit" disabled={!stripe || !elements}>
                        Pay
                    </button>

                    {errorMessage && <div>{errorMessage}</div>}
                </div>
            )}
        </form>
    );
};

const stripePromise = loadStripe('pk_test_51NfOh5E0uAKYbFOSiqWMS5UvQr2hskj3tcz2Rnh76OCjP8vXoW0NIFNDxktSP4itivOpsHIRlH6jVGhE4PVe1ORE00PwmjjFkk');

const StripePayment = () => {
    const [options, setOptions] = useState({
        mode: 'payment',
        currency: 'usd',
        amount: 1099,

    });

    useEffect(() => {
        axios.get('/stripe-creds')
            .then((res) => {
                console.log(res.data);
            })
    }, [options])

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    )
};

export default StripePayment;