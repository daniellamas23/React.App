import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";



const OrderModal = ({ handleBuy , orderId, clear}) => {

  const [show, setShow] = useState(false);
  const[showOrderId, setShowOrderId] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingresa tu nombre </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                autoFocus
              />
              <Form.Label>Ingresa Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"

              />
              <Form.Label>Re - ingresa el Email </Form.Label>
              <Form.Control
                type="email"

              />
            </Form.Group>
            <Form.Label>Ingresa tu teléfono </Form.Label>
            <Form.Control
              type="numeric"
              placeholder="+598"

            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {!orderId && (
            <>          
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleBuy}>
                Comprar
              </Button>
            </>
          )}
          {orderId && (
            <>
              <Alert key="success" variant="success">
              Numero de Orden: {orderId}
              </Alert>
              <Link to="/">
              <Button variant="success" onClick={() => clear()}>Seguir comprando</Button>
              </Link>
            </>

          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default OrderModal;