import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Properties from './components/Properties';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import PropertyForm from './components/PropertyForm';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/property-form" element={<PropertyForm />} />
            </Routes>
        </Router>
    );
};

export default App;
