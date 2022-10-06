import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';
import products from '../../Products.json'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
/* import { getAllProducts, getProducts, getProductsByCategory } from '../products' */


const ItemListContainer = ({ greeting }) => {

    const { id } = useParams();
    console.log(id)
/* 
    useEffect(() => {
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
     */

    return (

        <Container>
            
            <h1>Productos</h1>
            <h3 className="greeting">{greeting} </h3>
         
            <ItemList products={products} /> {/* .filter((element)=> (element.tipo === "CPU" || element.tipo === "PC" ) */}
              
      <ul>

      </ul>
  
        </Container>

    );

}

export default ItemListContainer;