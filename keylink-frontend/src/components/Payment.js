import React, { useState } from 'react';
import './Payment.css'; // Import CSS file for styles

const Payment = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        console.log("Processing payment of", amount);
    };

    return (
        <div className="payment-container">
            <h1>Payment</h1>
            <form onSubmit={handlePayment} className="payment-form">
                <input
                    type="number"
                    placeholder="Amount ($)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <button type="submit" className="pay-button">Pay Now</button>
            </form>
        </div>
    );
};

export default Payment;
