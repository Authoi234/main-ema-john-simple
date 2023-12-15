import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart, children }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>selected items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button style={{ backgroundColor: '#FF3030', borderRadius: '4px', padding: '0.9rem 3.77rem', wordBreak: 'break-all', border: '0', fontSize: '1rem', color: 'white', cursor: 'pointer' }} onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;