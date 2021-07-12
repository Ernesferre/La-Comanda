import React from 'react'
import classes from './ResumenComidas.module.css';

const ResumenComidas = () => {
    return (
    <section className={classes.summary}>
        <h2> Comida Deliciosa </h2>
        <p> 
            Elige tu comida favorita de nuestra mejor seleccion y disfruta un delicioso almuerzo o cena en tu casa.
        </p>
        <p>
            Todas nuestras comidas estan hechas con los ingredientes de mejora calidad, justo a tiempo y por supuesto cocinada por los mejores Chefs !
        </p>
    </section>
    );
}

export default ResumenComidas
