import AddToCart from "./AddToCart";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-center">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.title}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.price}</b></p>
                    <AddToCart item={item} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;