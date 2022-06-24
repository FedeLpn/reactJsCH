import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (

    <CartProvider>

      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/productos' element={<ItemDetailContainer />}></Route>
            <Route path='/categoria/:categoryId' element={<ItemDetailContainer />}></Route>
            <Route path='/Contacto' element={<Contacto />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
