import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { doc, getFirestore, getDoc, getDocs, collection } from 'firebase/firestore';
import { useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';



function App() {

  //acceso a un documento especifico  //detail
  useEffect(() => {
    //obtener referencia a db
    const database = getFirestore();
    //
    const itemReference = doc(database, "items", "q4PzlkftITdSSJQbxVwz");

    getDoc(itemReference).then((captura) => {
      if (captura.exists()) {
        const item = { //armamos objeto
          id: captura.id,
          ...captura.data()
        }
    /*     console.log(JSON.stringify(item)) */
      }
    })
      .catch(error => console.warn(error))
    /*   console.log(JSON.stringify(itemReference) + "   ITEM REFERENCE") */
  }, [])

  //acceso a una coleccion de items // list
  useEffect(() => {
    //obtenemos db
    const database = getFirestore();
    //obtenemos referencia
    const collectionReference = collection(database, 'items');
    //obtenemos datos
    getDocs(collectionReference).then((captura) => {
      const list = captura
      .docs
      .map((info) => {        
          const item = { //armamos objeto
            id: info.id,
            ...info.data()
          }

      })

    })
  }, [])




  return (
    <>
      <BrowserRouter /*  basename='/React.App' */ >
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