import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Welcome to PowerGamer'}  />} />
      <Route path='/category/:id'  element={<ItemListContainer/>}/>   
      <Route path='/item/:id'  element={<ItemDetailContainer/>}/>   
      <Route path='/cart' element={<Cart />} />      
      </Routes>       
      </BrowserRouter>
      <img src={logo} alt="Logo"></img>
 
    </>
  );
}

export default App;