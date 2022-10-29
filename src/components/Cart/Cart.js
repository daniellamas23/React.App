import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";

const Cart = () => {
const [input, setInput] = useState(true)

/*   const onclick = () => {
    console.log("before change " + input)
setInput(!input)
console.log("after change " + input)
  } */

  const handleChange = (event) => {
    console.log(event.target.value  + " " + new Date())
    event.target.value === "" ? setInput(true) : setInput(false)

  }
  const {cart} = useContext(CartContext)
  console.log(cart)

  return (
    <Container>
      <h1>Market</h1>
      <input onChange={handleChange}></input>
      <button disabled={input} onClick={onclick}>Botón</button>
    </Container>
  );
}
 
export default Cart;