import React, { useEffect, useState } from 'react';
import './Shop.css'
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb'
import Product from '../Product/product';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";


/* 
count, : loaded
perPage (size): 10
pages: count / perPage
currentPage (page)
*/


const Shop = () => {
    // const {products, count} = useLoaderData();
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products);
            })
    }, [page, size])

    const pages = Math.ceil(count / size);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = [];
        const ids = Object.keys(storedCart);
        console.log(ids);
        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storedCart) {
                    const addedProduct = data.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct)
                    }
                }
                setCart(savedCart)
            })
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        const exist = cart.find(product => product._id === selectedProduct._id)
        let newCart = [];
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(selectedProduct._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <button style={{ backgroundColor: 'orange', borderRadius: '4px', padding: '1rem 3.7rem', border: '0', fontSize: '1rem', color: 'white', cursor: 'pointer', marginTop: '10px' }}>Review Orders</button>
                    </Link>
                </Cart>
            </div>
            <div className="pagination">
                <FaAnglesLeft></FaAnglesLeft>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number && 'selected'}
                    >
                        {number + 1}
                    </button>)
                }
                <FaAnglesRight></FaAnglesRight>
                <select name="" id="" onChange={event => setSize(event.target.value)} className='selectPageNum'>
                    <option value="5">5</option>
                    <option value="10" selected >10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;