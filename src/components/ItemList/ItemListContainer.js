import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, getAllProducts } from '../products'


const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const { categoryId } = useParams();

  useEffect(() => {
/*      console.log(categoryId)  */
    if (categoryId) {
      getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    }
  }, [categoryId])

  return (

    <Container>

      <h1>Productos</h1>
      <h3 className="greeting">{greeting} </h3>
      <ItemList products={products/* .filter((element) => element.tipo === "cpu") */} />

      <ul>

      </ul>

    </Container>

  );

}

export default ItemListContainer;