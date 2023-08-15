import React, { useState } from 'react';
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

    // Convert donation amount to cents
    const amountInCents = parseFloat(donationAmount) * 100;

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount: amountInCents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donation Amount ($):
        <input
          type="number"
          step="0.01" // Allow decimals for dollars and cents
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
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51NfOh5E0uAKYbFOSiqWMS5UvQr2hskj3tcz2Rnh76OCjP8vXoW0NIFNDxktSP4itivOpsHIRlH6jVGhE4PVe1ORE00PwmjjFkk');

const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 1099,
  appearance: {
    /*...*/
  },
};

const StripePayment = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
);

export default StripePayment;