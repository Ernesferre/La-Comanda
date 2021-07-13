import React, {useContext} from 'react'
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    console.log(cartCtx.items)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);


    return (
        <button className={classes.button} onClick={props.onClick}>
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
