import {useContext } from 'react';
import React from 'react'
import classes from './ComidaItem.module.css';
import ComidaItemForm from './ComidaItemForm';
import CartContext from '../../../store/cart-context';

const ComidaItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`
    
    const addToCartHandler= amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price

        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                
            </div>
            <div>
                <ComidaItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default ComidaItem
