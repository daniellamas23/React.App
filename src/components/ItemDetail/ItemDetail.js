import Item from "../ItemList/Item"
import Counter from "../ItemCount/Counter"
import CartContext from "../../contexts/CartContext";
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './ItemDetail.css'




const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(0)
    const [showItemCount, setShowItemCount] = useState(true)

    const handleAdd = (value) => {
        setCount(value)
        setShowItemCount(false)
        console.log(product +" product value" +value)
         addItem(product, value)
         
    }

    return (
        <>  
        <div style={{textAlign:"center",display:"grid",justifyContent:"center",gridGap:"25px"}}>
            <div>
            <Item product={product}/> 
            </div>
            <div>{showItemCount && (<Counter ini={1} stock={10} onAdd={handleAdd} />)}
            {!showItemCount && (
                <Link to='/cart'>
                    <Button variant="success">
                        Ir al Carrito
                    </Button>
                </Link>
            )}
            </div>
    </div>
        </>
    );
}

export default ItemDetail;




