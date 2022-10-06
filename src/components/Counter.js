import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const [date, setDate] = useState(new Date())
    const handleClick = () => {
        setCount(count + 1)
        setDate(new Date())
    }

    const task = new Promise((resolve, reject) => {
       setTimeout(() => {
       resolve(true)
    },3000)
})
    console.log(task) //opcion a     consolea y la vemos pendiente

    task.then((result) => {  //opcion b    consolea y la vemos fulfilled porque es despues del then
        console.log(result)
    })

    return (
        <>
            <div onClick = {handleClick}>
                <h3>Cantidad de clicks: {count} </h3>
                <h4>Hora del ultimo evento: {date.toLocaleString()} </h4>
            </div>
        </>
    )
}

export default Counter 