import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContext } from './components/CartContext/CartContext';
import { useState } from 'react';
import Contacto from './components/Contacto/Contacto';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const usuario = {
    nombre: 'Federico'
  }

  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, isInCart }}>

      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer nombre={usuario.nombre} />}></Route>
            <Route path='/productos' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
            <Route path='/categoria/:categoryId' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
            <Route path='/detalle' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
            <Route path='/Contacto' element={<Contacto nombre={usuario.nombre} />}></Route>

          </Routes>

        </div>
      </BrowserRouter>
    </CartContext.Provider>

  );
}

export default App;
