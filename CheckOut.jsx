import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const CheckOut = () => {
    const {itemsInCart, sumaTotal, borrarItem} = useContext(CartContext);

    return(
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-6">
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-6">
                            <label className="form-label">Email: </label>
                            <input type="text" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-6">
                            <label className="form-label">Telefono: </label>
                            <input type="text" className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <button type="button" className="btn btn-primary my-4">Generar Orden</button>
                    </form>
                </div>       
            </div>
            <div className="col-md-6">
                        {itemsInCart.map(item => (
                        <div key={item.producto.id}>
                            <img src={item.producto.image} width={50}/>
                            {item.producto.title}
                            {item.cantidad}
                            {item.producto.price * item.cantidad}
                            <button onClick={()=>borrarItem(item)}>Borrar</button>
                        </div>
                    ))}
            </div>
            <div className="row">
                <div className="col-md-4 my-5">
                    <p> suma total: {sumaTotal()}</p>
                </div>
            </div>
        </div>
    )
}


export default CheckOut;