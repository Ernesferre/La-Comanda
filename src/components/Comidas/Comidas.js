import React from 'react'
import ComidasDisponibles from './ComidasDisponibles'
import ResumenComidas from './ResumenComidas'
import { Fragment } from 'react'

const Comidas = () => {
    return (
    <Fragment>
        <div>
            <ResumenComidas />
            <ComidasDisponibles />      
        </div>
    </Fragment>
    )
}

export default Comidas
