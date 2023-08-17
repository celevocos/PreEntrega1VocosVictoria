import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);    //funcion de contexto recibe un params, valor por default

//declaro un nuevo custom hook, retorna el hook de react
// para pasarle el contexto que se creó

export const useCartContext = () => useContext(CartContext);

/*
Añadir 
Leer
Eliminar
Limpiar
*/

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const agregarProduct = (item, cant) => {
        //voy a buscar el mismo ID en el carrito, si existe tengo que actualizar solo la cantidad
        const element = cart.find((e) => e.id === item.id);

        //forma simplificada
        if (!element) return setCart([...cart, { ...item, cant, }]);

        const nuevoCart = cart.map((product) =>
            product.id === item.id ? { ...product, cant: product.cant + cant } : product
        );
        setCart(nuevoCart)
    }

    //funcion que devuelve la suma de todos los item del carrito
    const getCartCant = () => cart.reduce((acc, item) => acc + item.cant, 0);

    //ELIMINAR ITEM DEL CARRITO
    const removeProduct = (id) => {
        const nuevoCart = cart.filter((product) => product.id !== id);
        setCart(nuevoCart);
    }

    //LIMPIAR
   const cleanCart=()=> setCart([]);

   //OBTENER EL PRECIO TOTAL
   const getTotal =()=> cart.reduce((acc, item)=> acc + item.price * item.cant, 0)

    const value = {
        cart, 
        agregarProduct,
        getCartCant, 
        getTotal,
        removeProduct,
        cleanCart        
    };

    //el value es del provider, si no lo ponemos toma por default es el de createContext
    return <CartContext.Provider value={value} displayName="CartContext"> {children}

    </CartContext.Provider>
}