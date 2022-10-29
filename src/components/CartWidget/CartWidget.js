import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  return (
    <>
      <Link to="/cart">
        <AiOutlineShoppingCart />
        <Badge bg="danger" text="dark" >
            {totalQuantity}
          </Badge>
      </Link>
    </>
  );
}

export default CartWidget;