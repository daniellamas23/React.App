import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './components/CartWidget.css';



function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a PowerGamer" />
    </>
 
  );
}

export default App;