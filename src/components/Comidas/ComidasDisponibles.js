import Card from '../UI/Card';
import ComidaItem from './ComidaItem/ComidaItem';
import classes from './ComidasDisponibles.module.css';

const COMIDAS_FICTICIAS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
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

  