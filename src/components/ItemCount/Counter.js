import { useEffect, useState } from "react"
import { Button } from 'react-bootstrap';
//import './ItemCount.css';


const Counter = ({ onAdd, ini, stock }) => {
    const [count, setCount] = useState()



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

    /* 
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(!true)
            }, 3000)
        })
        console.log(task)
        task.then((result) => {
            console.log(result)
        }) */



    return (
        <>
            <div className="CounterContainer">
                <Button variant="danger" disabled={count <= 1} onClick={handleClickMinus}>-</Button>
                <span>{count}</span>
                <Button variant="primary" disabled={count >= 10} onClick={handleClickAdd}>+</Button>
                <Button variant="primary" disabled={stock <= 0} onClick={handleClick}>Agregar al  Carrito</Button>
            </div>
        </>
    )
}

export default Counter 