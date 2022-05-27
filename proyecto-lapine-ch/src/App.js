import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Grilla } from './components/Grilla/Grilla';

function App() {

  const usuario = {
    nombre: 'Federico'
  }

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre={usuario.nombre} />
      <Grilla />
      <Grilla />
      <Grilla />
    </div>

  );
}

export default App;
