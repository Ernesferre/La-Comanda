import React from 'react'
import comida from '../../assets/comida.jpg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                <h1>Comidas</h1>
                <button> Cart </button>
            </header>

            {/* imagen */}
            <div className={classes['main-image']}>
                <img src={comida} alt="Tu comida de todos los dias"/>
            </div>
            
        </div>
    )
}

export default Header
