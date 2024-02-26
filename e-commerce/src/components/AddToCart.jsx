import { useEffect, useState, useContext } from "react";
import { CartContext } from "./context/CartContext";

const AddToCart = ({item}) => {
    const {agregarItem, itemsInCart} = useContext(CartContext);
    const itemInCart = itemsInCart.find(i => i.producto.id === item.id);
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(1);    



    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const decrementar = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            console.log("Agregaste " + counter + " productos al carrito. Quedan " + (itemStock - counter) + " productos disponibles.");
            agregarItem(item, counter);
        }
    }

        useEffect(() => {
        setItemStock(item.stock -  (itemInCart ? itemInCart.cantidad : 0))
     }, [item.stock, itemInCart]);

    return (
        <>
            <div className="row my-1">
                <div className="col-md-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-warning" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-warning">{counter}</button>
                        <button type="button" className="btn btn-warning" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-4">
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default AddToCart;