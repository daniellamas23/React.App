import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './contexts/CartContext';


function App() { 
   
  return (
    <>
      <BrowserRouter basename='/React.App' >
        <CartProvider>
        <NavBar />       
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome to PowerGamer'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>     
        </CartProvider> 
      </BrowserRouter>


    </>
  );
}

export default App;