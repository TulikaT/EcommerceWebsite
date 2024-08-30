// Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Simulate sign in logic here
        // After successful sign in, navigate to the cart or home page
        navigate('/signin'); // or wherever you want to navigate
    };

    return (
        <div className="checkout-container">
            <h2 className="checkout-heading">Checkout</h2>
            <p className="checkout-message">Please sign in to proceed with your order.</p>
            <button className="checkout-button" onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default Checkout;

