import React, { useState } from "react";
import "./Login.css"; // Import CSS file for styles

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        console.log("Logging in with", email, password);
        // Reset error message after successful input
        setError("");
        // Handle login logic here
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login to Your Account</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="register-link">
                Don't have an account? <a href="/register">Register here</a>
            </p>
        </div>
    );
};

export default Login;
