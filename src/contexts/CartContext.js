import { createContext, useState } from "react";
import { useParams } from "react-router-dom";


const CartContext = createContext({})


export default CartContext;


export const CartProvider = ({ children }) => {
    const { id } = useParams()
    const [cart, setCart] = useState([])

    const addItem = (product, cantidad) => {
        if (!existInCart(product.id)) {
            const item = {
                ...product,
                cantidad
            }
            console.log("CONSOLE LOG VARIOS " + product.id +"  <-- product id " + JSON.stringify(item) )
            setCart([...cart, item])
        }
        //si está repetido solo actualizo la cantidad
        else {
            //buscamos index de item
            const itemIndex = cart.findIndex((item) => item.id === parseInt(product.id))
            console.log(id + "   ID LOG")
            console.log(product.id + "   product.ID LOG")
            //creamos borrador del item para no modificar el estado del carrito
            const itemDraft = {...cart[itemIndex]}
            //actualizamos cantidad en borrador
            itemDraft.cantidad = itemDraft.cantidad + cantidad
            //borrador de carrito
            const cartDraft = [...cart]
            //actualizamos 
            cartDraft[itemIndex] = itemDraft
            setCart(cartDraft)
        }
 
    }

    const existInCart = (id) => cart.some((item) => item.id === parseInt(id))
    


    const removeItem = (itemId) => {
      const cartDraft =  cart.filter((item) => item.id === itemId)
      setCart(cartDraft)
    }

    const clear = () => {
        setCart([])
    }


    return (
        <>
            <CartContext.Provider value={{ cart, addItem, existInCart, clear, removeItem }}>
                {children}
            </CartContext.Provider>
        </>
    );
}

