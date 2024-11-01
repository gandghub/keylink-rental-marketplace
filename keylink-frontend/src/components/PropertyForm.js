import React, { useState } from 'react';
import './PropertyForm.css'; // Import CSS file for styles

const PropertyForm = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting property:", { title, location, price });
    };

    return (
        <div className="property-form-container">
            <h1>Submit a Property</h1>
            <form onSubmit={handleSubmit} className="property-form">
                <input
                    type="text"
                    placeholder="Property Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price ($)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default PropertyForm;
