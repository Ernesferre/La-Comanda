import Card from '../UI/Card';
import ComidaItem from './ComidaItem/ComidaItem';
import classes from './ComidasDisponibles.module.css';

const COMIDAS_FICTICIAS = [
    {
      id: 'm1',
      name: 'Pastrami Neyorkino',
      description: 'Sanwich de pastron casero ahumado, queso pategras fundido y mostaza de dijon casera',
      price: 550,
    },
    {
      id: 'm2',
      name: 'Pork ribs',
      description: 'Ribs de cerdo ahumada 4 horas a baja temperatura',
      price: 750,
    },
    {
      id: 'm3',
      name: 'Smoked bondiola',
      description: 'Bondiola de cerdo ahumada 5 horas y terminada en reduccion de cerveza negra',
      price: 770,
    },
    {
      id: 'm4',
      name: 'Cibatta de picaña',
      description: 'PAn ciabatta, cuadril ahumado y marinado, morrones asados, rucula y mayonesa casera',
      price: 620,
    }
]


const ComidasDisponibles = () => {
    const listaComidas = COMIDAS_FICTICIAS.map((item) => (
        <ComidaItem 
            key={item.id} 
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
        /> 
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {listaComidas}
                </ul>
            </Card>
        </section>
    )
};

export default ComidasDisponibles

  