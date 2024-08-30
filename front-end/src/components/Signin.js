import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';

function Signin({ onSignin }) {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login function:', login); // Debugging log
        if (email && password) {
            onSignin({ email, password });
            if (typeof login === 'function') { // Check if login is a function
                login({ email, password }); // Include password if needed
            } else {
                console.error('Login is not a function'); // Log error
            }
            setEmail('');
            setPassword('');
            setError('');
            navigate('/cart'); // Redirect to cart after sign-in
        } else {
            setError('Please enter both email and password.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-header">Sign In</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="form-button">Sign In</button>
            </form>
            <div className="form-footer">
                <p>Don't have an account? <a href="/signup">Signup</a></p>
            </div>
        </div>
    );
}

export default Signin;
