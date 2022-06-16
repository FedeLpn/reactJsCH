import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/Contacto/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';


function App() {

  const usuario = {
    nombre: 'Federico'
  }

  return (

    <CartProvider>

      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer nombre={usuario.nombre} />}></Route>
            <Route path='/productos' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
            <Route path='/categoria/:categoryId' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
            <Route path='/detalle' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
            <Route path='/Contacto' element={<Contacto />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
