import React from 'react';
import products from '../data/products';
import Product from './Product';
// import { Link } from 'react-router-dom';

const Home = ({ onAddToCart }) => {
    return (
        <div className="home-container">
            {products.map(product => (
                <Product key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default Home;

