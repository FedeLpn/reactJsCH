import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {

  const usuario = {
    nombre: 'Federico'
  }

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre={usuario.nombre} />

    </div>

  );
}

export default App;
