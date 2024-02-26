import { useEffect, useState } from "react";
//import arrayProductos from  "./json/prductos.json";
import ItemDetail from "./ItemDetail";
//import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from 'firebase/firestore'
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // useEffect(() =>{
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             let producto = arrayProductos.find(item => item.id === parseInt(id));
    //             resolve(producto);
    //         },)
    //     })
    //     promesa.then(data =>{
    //         setItem(data);
    //     })
    // }, [id]);
    useEffect(() =>{
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
          setLoading(false);  
          setItem({id: resultado.id, ...resultado.data()});
        });
    }, [id]);



    return(
        <div>
            {loading ? <Loading/> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;