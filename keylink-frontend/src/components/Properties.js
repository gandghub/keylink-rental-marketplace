import React from 'react';
import './Properties.css'; // Import CSS file for styles

const Properties = () => {
    return (
        <div className="properties-container">
            <h1>Available Properties</h1>
            <div className="property-card">
                <h2>Luxury Apartment</h2>
                <p>Location: Downtown</p>
                <p>Price: $2,500/month</p>
                <button className="view-button">View Details</button>
            </div>
            <div className="property-card">
                <h2>Cozy House</h2>
                <p>Location: Suburb</p>
                <p>Price: $1,800/month</p>
                <button className="view-button">View Details</button>
            </div>
            {/* Add more property cards as needed */}
        </div>
    );
};

export default Properties;
