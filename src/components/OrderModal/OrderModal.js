import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";



const OrderModal = ( {handleBuy} ) => {
    
      const [show, setShow] = useState (false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
      Comprar
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuy}>
            Comprar!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 
export default OrderModal;