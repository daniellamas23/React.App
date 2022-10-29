import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import "./Cart.css"



const Cart = () => {

  const { cart, total, totalQuantity, removeItem } = useContext(CartContext)

  const handleClick = (id) => {
    removeItem(id)

  }

  const resultado = []
  cart.forEach((element) => {
    resultado.push(
      <>
        <div key={element.id} className="card grid">
          <div className="card id"><span>{cart.indexOf(element) + 1} </span></div>
          <div className="card cart-card">
            <a href="#"><img src={element.img} className="card-img-top cart-img" alt={element.tipo + element.id}></img></a>
          </div>
          <p className="card cart-card" style={{ textTransform: "uppercase", }}>{element.tipo} <p>{element.precio} {element.div}</p></p>
          <div className="card cart-card" style={{ fontSize: "16px", textAlign: "center" }}><p>Especificaciones:</p><p>{element.char} </p></div>
          <div className="card cart-card id">{element.cantidad} </div>
          <div className="card cart-card id">{element.precio * element.cantidad}</div>
          <div className="card cart-card id"> <FaRegTrashAlt onClick={() => handleClick(element.id)} /> </div>

        </div>
      </>

    )
  })
  return (
    <Container>
      <h1>Carrito</h1>
      {resultado}
      {cart.length > 0 && (
        <>
        <div style={{ textAlign: "right" }}>
        <h3>Total: {total} </h3>
          <Link to="/cart">
            <Button variant="success">Comprar</Button>
          </Link>
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