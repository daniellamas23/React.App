import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";




const OrderModal = ({ handleBuy , orderId, clear, onClose, show}) => {

  const[showOrderId, setShowOrderId] = useState(false)
  const [form, setForm] = useState({})
  const [inputs, setInputs] = useState(true)  


  const verify = () => { 
    if( (form.name && form.email && form.email2 && form.phone) != undefined) {  
      setInputs(false)
    }
    else {
      setInputs(true)       
    }
  }
 



  const setField = (field,value) => {
    setForm({
      ...form,
      [field]:value
    })
  }
  

  return (
    <>
      <Modal show={show} onHide={onClose}>
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
                onChange={(e)=> setField('name', e.target.value)  + verify()}
                      
              />
              <Form.Label>Ingresa Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=> setField('email', e.target.value) + verify() }

              />
              <Form.Label>Re - ingresa el Email </Form.Label>
              <Form.Control
                type="email" placeholder="name@example.com"
                onChange={(e)=> setField('email2', e.target.value) + verify()}
              />
            </Form.Group>
            <Form.Label>Ingresa tu teléfono </Form.Label>
            <Form.Control
              type="numeric"
              placeholder="+598 123 456"
              onChange={(e)=> setField('phone', e.target.value) + verify() }
              verify
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {!orderId && (
            <>          
              <Button variant="secondary"  onClick={onClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleBuy} disabled={inputs}  >
                Comprar
              </Button>
            </>
          )}
          {orderId && (
            
            <>
            <Alert variant="info">
             <p> Tu compra ha sido realizada!! </p>
             <p>Se han enviado los datos de compra al email ingresado.</p>
              </Alert>            
               <Alert key="success" variant="success">
              Numero de Orden: {orderId}
              </Alert>
              <Link to="/">
              <Button variant="success" onClick={clear} >Seguir comprando</Button>
              </Link>
            </>

          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default OrderModal;