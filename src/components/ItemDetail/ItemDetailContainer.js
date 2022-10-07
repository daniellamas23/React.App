import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom"
import { getProduct } from '../products'
import Item from '../ItemList/Item'



const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  const { id } = useParams();
  console.log({ id })

  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data)
      })
      .catch(error => console.warn(error))
  }, [id])




  return (

    <Container>
      <h1> Detalle del producto (ITEM DETAIL CONTAINER)</h1>
      <Item product={product} />
    </Container>
  )
}

export default ItemDetailContainer