import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  const usuario = {
    nombre: 'Federico'
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer nombre={usuario.nombre} />}></Route>
          <Route path='/productos' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
          <Route path='/categoria/:categoryId' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>
          <Route path='/detalle' element={<ItemDetailContainer nombre={usuario.nombre} />}></Route>

        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
