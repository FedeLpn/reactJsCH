import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  const usuario = {
    nombre: 'Federico'
  }

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre={usuario.nombre} />
      <ItemDetailContainer nombre={usuario.nombre} />

    </div>

  );
}

export default App;
