KeyLink Rental Marketplace
Table of Contents

    Project Overview
    Features
    Architecture
    Technologies Used
    Getting Started
    Installation
    Usage
    Challenges and Lessons Learned
    Future Improvements
    Contributing
    License

Project Overview

The KeyLink Rental Marketplace is a full-stack web application designed to address rental challenges in Addis Ababa, Ethiopia, specifically catering to the needs of expats and locals. It simplifies the process of listing, searching, booking, and managing rental properties such as apartments and villas. The platform is built with a secure and scalable architecture to ensure efficiency and reliability in the rental process.
Features

    Property Listings: Property owners can list properties with detailed descriptions and images.
    Search and Matching: Tenants can search for properties based on location, price, and preferences using filters.
    Secure Booking and Payments: Integrated payment systems via Stripe or a local Ethiopian provider for secure transactions.
    Geolocation: Properties are mapped using Google Maps API for easy location-based searching.
    User Authentication: Role-based authentication for property owners and tenants, secured with JWT.
    Rental Management: Property owners can manage listings, rental agreements, and tenant information.

Architecture

The KeyLink Rental Marketplace follows a three-tier architecture:

    Frontend:
        Built with React.js, offering a responsive and user-friendly interface.
        Components include property listings, search filters, user authentication, and dashboards for both tenants and property owners.

    Backend:
        Node.js with Express handles the server-side logic, API requests, and business operations.
        RESTful API endpoints are used for communication between the frontend and backend.

    Database:
        MongoDB serves as the NoSQL database for storing user data, property listings, and transaction records.
        Models for users, properties, and bookings ensure organized and scalable data handling.

Technologies Used

    Frontend: React.js
    Backend: Node.js with Express
    Database: MongoDB
    Payment Integration: Stripe (or local payment gateway)
    Authentication: JWT (JSON Web Token)
    Geolocation: Google Maps API
    Deployment: AWS or Heroku
    Version Control: Git and GitHub for collaboration and versioning

Getting Started

To get started with the KeyLink Rental Marketplace, you can clone this repository and follow the instructions below to set up your local environment.
Installation

    Clone the repository:

    bash

git clone https://github.com/gandghub/keylink-rental-marketplace.git

Navigate to the project directory:

bash

cd keylink-rental-marketplace

Install the dependencies:

bash

npm install

Set up environment variables:

    Create a .env file in the root directory and add the following:

    bash

    MONGO_URI=your_mongo_database_url
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key

Run the application:

bash

    npm start

Usage

Once the app is running, you can visit the following pages:

    Home Page: View available properties and use search filters.
    Property Listings: Owners can add, edit, or delete property listings.
    Booking & Payment: Tenants can view property details, book, and pay securely online.
    Dashboard: Owners and tenants can manage their profiles and view transaction histories.

Challenges and Lessons Learned

    High Rental Costs: Finding a way to provide value to expats and locals in the high-cost rental market required careful consideration of property features and filters.
    Integration of Payment Gateways: Integrating Stripe for international payments and researching local Ethiopian payment gateways was challenging but critical for usability.
    Localization: Ensuring that the application was accessible to Ethiopian users, especially through local payment methods and language considerations, was an important lesson in user-centric design.

Future Improvements

    Mobile Optimization: Although the app is responsive, future improvements will include mobile-specific optimizations.
    More Payment Options: Additional payment gateways, including mobile money options popular in Ethiopia, will be integrated.
    Advanced Search Filters: Enhancements to the search functionality, including neighborhood-based searches and school proximity filters, will improve the user experience.

Contributing

Contributions are welcome! If you have suggestions or would like to contribute to this project, please fork the repository and submit a pull request.

    Fork the project
    Create a feature branch (git checkout -b feature/YourFeature)
    Commit your changes (git commit -m 'Add Your Feature')
    Push to the branch (git push origin feature/YourFeature)
    Open a pull request

License

This project is licensed under the MIT License. See the LICENSE file for more information.

Links

    Live Demo: KeyLink Rental Marketplace
    GitHub Repository: KeyLink Rental Marketplace Repository
    Project Pitch Presentation: Google Slides


