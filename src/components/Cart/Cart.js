import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import OrderModal from "../OrderModal/OrderModal";
import "./Cart.css"

const buyerMock = {
  name: 'customer',
  phone: '1122334455',
  email: 'customer@mail.com'
}

const Cart = () => {

  const { cart, total, removeItem, clear } = useContext(CartContext)

  const handleClick = (id) => {
    removeItem(id)
  }

  const handleClear = () => {
    clear()
  }

   const handleBuy = async () => {
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    console.log(newOrder)
    }; 


  const resultado = []
  cart.forEach((element) => {
    resultado.push(
      <>
        <div key={element.id} className="card grid">
          <div className="card id"><span>{cart.indexOf(element) + 1 + ")"} </span></div>
          <p className="card cart-card id" style={{ textTransform: "uppercase", }}><b>{element.tipo}</b></p>
          <div className="card cart-card">
            <a href="#"><img src={element.img} className="card-img-top cart-img" alt={element.tipo + element.id}></img></a>
          </div>
          <div className="card cart-card" style={{ fontSize: "16px", textAlign: "center" }}><p><b>Especificaciones:</b></p><p>{element.char} </p></div>
          <div className="card cart-card id">{element.cantidad}</div>
          <div className="card cart-card id element"> {element.precio * element.cantidad} {element.div} </div>
          <div className="card cart-card id"> <FaRegTrashAlt onClick={() => handleClick(element.id)} /> </div>

        </div>
      </>

    )
  })
  return (
    <Container>
      <h1>Carrito</h1>
      <Table striped  >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th style={{ textAlign: "left" }} scope="col">tipo</th>
            <th style={{ textAlign: "center" }} scope="col">descripcion</th>
            <th style={{ textAlign: "center" }} scope="col">detalle</th>
          </tr>
        </thead>
      </Table>
      {resultado}
      {cart.length > 0 && (
        <>
          <Button style={{ textAlign: "left", margin: 'auto' }} variant="danger" onClick={handleClear}>Vaciar carrito</Button>
          <div style={{ textAlign: "right" }}>
            <h3>Total: {total} </h3>
            <OrderModal handleBuy={handleBuy}></OrderModal>  

          </div>
        </>
      )}
      {cart.length === 0 &&
        <>
          <div style={{ textAlign: "center" }} >
            <h3>Carrito de compras vacío</h3>
            <Link to="/">
              <Button variant="success" style={{ margin: "10%" }}>Ver productos</Button>
            </Link>
          </div>
        </>
      }    
      </Container>
  );
}

export default Cart;