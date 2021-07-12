
import Cart from './components/Cart/Cart';
import Comidas from './components/Comidas/Comidas';
import Header from './components/Layout/Header';


function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Comidas />
      </main>
    </>
  );
}

export default App;
