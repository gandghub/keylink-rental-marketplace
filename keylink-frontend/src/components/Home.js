import React from "react";
import "./Home.css"; // Import CSS file for styles

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="welcome-title">Welcome to KeyLink Rental Marketplace!</h1>
            <p className="welcome-message">
                Discover the best rental properties in your area. Whether you're looking for an apartment, a house, or a vacation rental, we've got you covered!
            </p>
            <p className="call-to-action">
                Start your search today and find your perfect home!
            </p>
            <button className="explore-button">Explore Rentals</button>
            <div className="graphics-container">
                <img className="home-image" src="/path/to/your/image.jpg" alt="Rentals" />
            </div>
        </div>
    );
};

export default Home;
