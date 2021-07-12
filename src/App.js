
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Comidas from './components/Comidas/Comidas';
import Header from './components/Layout/Header';



function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  


  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}  />
      <main>
        <Comidas />
      </main>
    </>
  );
}

export default App;
