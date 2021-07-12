import React from 'react'
import classes from './ComidaItem.module.css';
import ComidaItemForm from './ComidaItemForm';

const ComidaItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    
    
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                
            </div>
            <div>
                <ComidaItemForm />
            </div>
        </li>
    )
}

export default ComidaItem
