import { createContext, useState } from "react";

export const CartContext = createContext({
    itemsInCart:[] , totalProductos: ()=> 0 , sumaTotal: ()=> 0, borrarItem: () => null, agregarItem: () => null
});

const CartContextProvider = ({children}) => {
    const [itemsInCart, setItemsInCart] = useState([]);

    const totalProductos = () => {
        return itemsInCart.length;
    }

    const sumaTotal = () =>{
        return itemsInCart.reduce((acumulador, item) => acumulador += (item.producto.price * item.cantidad), 0);
    }

    const agregarItem = (producto, cantidad) => {
        const itemIndex = itemsInCart.findIndex(itemInCart => itemInCart.producto.id === producto.id);
        if (itemIndex !== -1){
            const nuevaLista = [...itemsInCart];
            const cantidadExistente = itemsInCart[itemIndex].cantidad;
            nuevaLista[itemIndex].cantidad = cantidadExistente + cantidad;
            setItemsInCart(nuevaLista);
            return
        } 
        const nuevoItemInCart = {producto, cantidad};
        const nuevaLista = [...itemsInCart, nuevoItemInCart];

        setItemsInCart(nuevaLista);
    }

    const borrarItem = (item) => {
        const itemIndex = itemsInCart.findIndex(itemInCart => itemInCart.producto.id === item.producto.id);

        const nuevaLista = [...itemsInCart];

        nuevaLista.splice(itemIndex, 1);

        setItemsInCart(nuevaLista);
    }

    return (
        <CartContext.Provider value={{itemsInCart, totalProductos, sumaTotal, borrarItem, agregarItem}}>
            {children}
        </CartContext.Provider>

    )

}

export default CartContextProvider;