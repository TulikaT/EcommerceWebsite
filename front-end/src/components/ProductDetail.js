import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = ({ onAddToCart }) => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-detail-image" />
            <h2 className="product-detail-name">{product.name}</h2>
            <p className="product-detail-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ProductDetail;


