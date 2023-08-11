import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products, initialCart} = useLoaderData();   //{products: products, initialCart: initialCart}
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h1 style={{color: 'orange', display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>No Item For Review. Please <Link to={'/'} style={{textDecoration: 'none', marginLeft: '10px', color: 'orange'}}> Shop Now</Link></h1>
                }
            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                     <Link to="/shipping" style={{ backgroundColor: 'green',textDecoration: 'none', borderRadius: '4px', padding: " 0.4rem 2.33rem", fontSize: '15px', color: 'white', cursor: 'pointer'}}>Proceed Shipping</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;