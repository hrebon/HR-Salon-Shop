import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from './CardForm';


const stripePromise = loadStripe('pk_test_51Ie2ahEn81J7oBoZqIgWpXQEjdLqSgyilowAVVVk6IAg1nlnpvLHSH9ylpAsi9puZ4inrM7aJ3dNW1a2CudQ5RG10010Xt0zMK');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm></CardForm>
        </Elements>
    );
};

export default ProcessPayment;