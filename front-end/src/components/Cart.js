// Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart, onRemoveFromCart, isAuthenticated }) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!isAuthenticated) {
            navigate('/signin');
        } else {
            // Handle checkout logic
            console.log("Proceeding to checkout...");
        }
    };

    const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-list">
                {cart.length > 0 ? (
                    cart.map(product => (
                        <div key={product.id} className="cart-item">
                            <img src={product.image} alt={product.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className="cart-item-name">{product.name}</h3>
                                <p className="cart-item-price">Price: ${product.price.toFixed(2)}</p>
                                <button className="remove-button" onClick={() => onRemoveFromCart(product)}>Remove from Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            {cart.length>0 && (
                <div className='total-price'>
                    <h3>Total Price: ${totalPrice}</h3>
                </div>    
            )}
            {cart.length>0 && (
                <button onClick={handleCheckout} className="checkout-button">
                    Checkout
                </button>
            )}    
        </div>
    );
}

export default Cart;
