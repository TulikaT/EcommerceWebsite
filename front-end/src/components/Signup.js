// Signup.js
import React, { useState } from 'react';

function Signup({ onSignup }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && email && password) {
            onSignup({ username, email, password });
            // Reset form fields
            setUsername('');
            setEmail('');
            setPassword('');
            setError(''); // Clear any previous errors
        } else {
            setError('Please fill in all fields.'); // Error message
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-header">Sign Up</h2>
            {error && <p className="error-message">{error}</p>} {/* Error message display */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    className="form-input"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    className="form-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="form-button">Sign Up</button>
            </form>
            <div className="form-footer">
                <p>Already have an account? <a href="/signin">Signin</a></p>
            </div>
        </div>
    );
}

export default Signup;
