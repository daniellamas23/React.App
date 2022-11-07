import { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import OrderModal from "../OrderModal/OrderModal";
import { createOrder } from "../orders";
import "./Cart.css"



const buyerMock = {
  name: 'customer',
  phone: '1122334455',
  email: 'customer@mail.com'
}

const Cart = () => {

  const { cart, total, removeItem, clear } = useContext(CartContext)
  const [orderId, setOrderId] = useState();
  const [showModal, setShowModal] = useState(false);  
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleClick = (id) => {
    removeItem(id)
  }

   const handleBuy = async () => {    
    const newOrder = {
      buyer: buyerMock,
      items: cart,
      total
    };
    const newOrderId = await createOrder(newOrder)
    setOrderId(newOrderId)     
    clear()
    }; 


  const resultado = []
  cart.forEach((element) => {
    resultado.push(
      <Container key={element.id}>
        <div className="card grid">
          <div className="card id"><span>{cart.indexOf(element) + 1 + ")"} </span></div>
          <p className="card cart-card id" style={{ textTransform: "uppercase", }}><b>{element.tipo.substring(0,3)}</b></p>
          <div className="card cart-card">
            <img src={element.img} className="card-img-top cart-img" alt={element.tipo + element.id}></img>
          </div>
          <div className="card cart-card" style={{ fontSize: "16px", textAlign: "center" }}><p><b>Especificaciones:</b></p><p>{element.char} </p></div>
          <div className="card cart-card id">{element.cantidad} x</div>
          <div className="card cart-card id element"> {element.precio * element.cantidad} {element.div} </div>
          <div className="card cart-card id"> <FaRegTrashAlt onClick={() => handleClick(element.id)} /> </div>

        </div>
        </Container>

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
          <Button style={{ textAlign: "left", margin: 'auto' }} variant="danger" onClick={clear}>Vaciar carrito</Button>
          <div style={{ textAlign: "right" }}>
            <h3>Total: {total} </h3>       
            <Button variant="success" onClick={handleOpen} >
        Checkout
      </Button>    
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
      <div style={{ textAlign: "right" }}>
       <OrderModal handleBuy={handleBuy} 
       orderId={orderId}
       show={show} 
       onClose={handleClose}
       />
       </div>  
      </Container>
  );
}

export default Cart;