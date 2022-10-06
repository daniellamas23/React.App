import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom"

  import { products } from '../products' 


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();
    console.log(id)

/*  useEffect(() => {
        getProduct(id)
          .then((data) => {
            setProduct(data)
          })
          .catch(error => console.warn(error))
      }, [id])
   
 */

/* 
    const [products, setProduct] = useState()
    console.log(products)
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
          .then((data) => {
            setProduct(data)
          })
          .catch(error => console.warn(error))
      }, [id])  */
    
    return (

        <Container>
            <h1> Detalle del producto (ITEM DETAIL CONTAINER)</h1>
   
        </Container>
    )
}

export default ItemDetailContainer