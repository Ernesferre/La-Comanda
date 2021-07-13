import React, {useContext, useEffect, useState} from 'react'
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
    const cartCtx = useContext(CartContext);
    
    const { items } = cartCtx;

    console.log(cartCtx.items)

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);


    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);
        
        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])


    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}> 
                <AiOutlineShoppingCart /> 
            </span>
            <span> Tu Carrito </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton
