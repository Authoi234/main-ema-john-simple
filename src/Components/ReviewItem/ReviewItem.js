import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItems = ({product, handleRemoveItem}) => {
    const {name, price, quantity, shipping, img, id} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: <span>{price}</span></small></p>
                    <p><small>Shipping: <span>${shipping}</span></small></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;