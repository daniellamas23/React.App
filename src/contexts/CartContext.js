import { createContext, useState } from "react";
import { useParams } from "react-router-dom";


const CartContext = createContext({})


export default CartContext;


export const CartProvider = ({ children }) => {
    const {id} = useParams()
    const [cart, setCart] = useState([])

    const addItem = (product, cantidad) => { 
        console.log(product.id)  
        if (!existInCart(product.id)) {
            const item = {
                ...product,
                cantidad
            }
            setCart([...cart, item])
        }
        //si está repetido solo actualizo la cantidad
        else {
            //buscamos index de item
            const itemIndex = cart.findIndex((item) => item.id === product.id)
            //creamos borrador del item para no modificar el estado del carrito
            const itemDraft = {...cart[itemIndex]}
            //actualizamos cantidad en borrador
            itemDraft.cantidad = itemDraft.cantidad + cantidad
            //borrador de carrito que actualizo para luego setearlo en el estado con set cart
            const cartDraft = [...cart]
            //actualizamos borrador y seteamos cart , se debe realizar así para no modificar estado de componente
            cartDraft[itemIndex] = itemDraft
            setCart(cartDraft)
        }
 
    }

    const existInCart = (id) => cart.some((item) => item.id === id)
   

    const removeItem = (itemId) => {
      const cartDraft =  cart.filter((item) => item.id !== itemId)
      setCart(cartDraft)
    }

    const clear = () => {
        setCart([])
    }

    const total =  cart.reduce((items , item) => items + ( item.precio * item.cantidad) , 0) + " USD" 
   
    const totalQuantity = cart.reduce((items, item) => items + item.cantidad, 0);

    return (
        <>
            <CartContext.Provider value={{ cart, addItem, existInCart, clear, removeItem, total , totalQuantity }}>
                {children}
            </CartContext.Provider>
        </>
    );
}

