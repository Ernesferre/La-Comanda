import React from 'react'
import comida from '../../assets/comida.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <h1>La Comanda</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            {/* imagen */}
            <div className={classes['main-image']}>
                <img src={comida} alt="Tu comida de todos los dias"/>
            </div>
            
        </div>
    )
}

export default Header
