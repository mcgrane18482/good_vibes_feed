require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/connection');
const routes = require('./routes');
const stripe = require('stripe')('sk_test_51NfOh5E0uAKYbFOS6PQvI3zQq0mgbSCPa7ZnZ8xjEvLkWSv8QMalFJbfQLKbrkRrdcwHzcySfXhq1fF882ITJLeO00V2dxNFou');

const app = express();
const PORT = process.env.PORT || 3333;
const isProd = process.env.PORT;

// Middleware
if (isProd) {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(express.json());
app.use(cookieParser());

// Load routes here
app.use(routes);

// Create a PaymentIntent route
app.post('/create-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'], 
        });

        res.json({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error creating Payment Intent:', error);
        res.status(500).json({ error: 'An error occurred while creating the Payment Intent.' });
    }
});

// Start express server
db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
});
