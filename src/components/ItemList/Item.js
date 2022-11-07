import { useContext, useState } from "react";
import { Card, Container } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import Counter from "../ItemCount/Counter";
import CartContext from "../../contexts/CartContext";



const Item = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const location = useLocation()
    const [showItemCount, setShowItemCount] = useState(true)
    const [count, setCount] = useState(0)

    const handleAdd = (value) => {
        setCount(value)
        setShowItemCount(false)
        addItem(product, value)

    }

    return (<>

        {product &&
            (<Container style={{ display: 'grid' }}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body style={{ textAlign: 'center' }}>
                        <Card.Title style={{ textTransform: 'uppercase' }}>{product.tipo}</Card.Title>
                        <Card.Text>
                            {product.char}
                        </Card.Text>
                        <Card.Text>
                            {product.div}  {product.precio}
                        </Card.Text>
                        {!location.pathname.includes("item") && <Link to={`/item/${product.id}`}>
                            <Button variant="primary">
                                Ver detalle
                            </Button>
                        </Link>
                        }
                    </Card.Body>
                    {location.pathname.includes("item") && showItemCount && <Counter ini={1} stock={10} onAdd={handleAdd} />}
                    {!showItemCount && (
                        <Link to='/cart'>
                            <Button variant="success">
                                Ir al Carrito
                            </Button>
                        </Link>)}
                </Card>
            </Container>
            )
        }
    </>);

}


export default Item