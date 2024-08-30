import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, onAddToCart }) => {
    if (!product) return null;

    return (
        <div className="product">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;



