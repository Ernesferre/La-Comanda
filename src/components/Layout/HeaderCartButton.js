import React from 'react'
import classes from './HeaderCartButton.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}> 
                <AiOutlineShoppingCart /> 
            </span>
            <span> Your Cart </span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    )
}

export default HeaderCartButton
