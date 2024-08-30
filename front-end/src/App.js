// App.js
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { AuthContext } from './context/AuthContext';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout'; // Import Checkout

function App() {
    const { isDarkMode, toggleTheme } = useTheme();
    const { isAuthenticated } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    const handleRemoveFromCart = (productToRemove) => {
        setCart((prevCart) => 
            prevCart.filter(product => product.id !== productToRemove.id)
        );
        alert(`${productToRemove.name} has been removed from your cart!`);
    };

    const handleSignup = (user) => {
        console.log('User signed up:', user);
    };

    const handleSignin = (user) => {
        console.log('User signed in:', user);
    };

    return (
        <Router>
            <div className={isDarkMode ? 'App dark-mode' : 'App light-mode'}>
                <Navbar cartCount={cart.length} onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <h1 className='mainheading'>Welcome to the Ecommerce Platform</h1>
                <Routes>
                    <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
                    <Route path="/signin" element={<Signin onSignin={handleSignin} cart={cart} />} />
                    <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
                    <Route path="/cart" element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} isAuthenticated={isAuthenticated} />} />
                    <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
                    <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/signin" />} />
                    <Route path="/protected" element={
                        <ProtectedRoute>
                            <div>Protected Content</div>
                        </ProtectedRoute>
                    } />   
                </Routes>
            </div>
        </Router>
    );
}

export default App;



