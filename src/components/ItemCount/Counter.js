import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
//import './ItemCount.css';


const Counter = ({ onAdd, ini, stock }) => {
    const [count, setCount] = useState(0)



    const handleClickAdd = () => {
        setCount(count + 1)

    }
    const handleClickMinus = () => {
        setCount(count - 1)
    }

    const handleClick = () => onAdd(count);

    useEffect(() => {
        setCount(ini)
    }, [ini])



    return (
        <>
            <div className="Counter">
                <div>
                    <Button variant="danger" disabled={count <= 1} onClick={handleClickMinus}>-</Button>
                    <span>{count}</span>
                    <Button variant="primary" disabled={count >= 10} onClick={handleClickAdd}>+</Button>
                </div>
                <div>
                    <Button variant="primary" style={{marginLeft:"10px"}} disabled={stock <= 0} onClick={handleClick}>Agregar al  Carrito</Button>
                </div>
            </div>
        </>
    )
}

export default Counter 