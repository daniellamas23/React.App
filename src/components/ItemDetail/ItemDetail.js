import Item from "../ItemList/Item"
import Counter from "../ItemCount/Counter"
import CartContext from "../../contexts/CartContext";
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"




const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0)
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (value) => {
        setCount(value)
        setShowItemCount(false)
         addItem(product, value)
         
    }

    return (
        <>
            <Item product={product} />
            {showItemCount && (<Counter ini={1} stock={10} onAdd={handleAdd} />)}
            {!showItemCount && (
                <Link to='/cart'>
                    <Button variant="success">
                        Ir al Carrito
                    </Button>
                </Link>
            )}
        </>
    );
}

export default ItemDetail;




