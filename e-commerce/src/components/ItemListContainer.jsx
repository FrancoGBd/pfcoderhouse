import { useEffect, useState } from "react";
//import arrayProductos from  "./json/prductos.json";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

const ItemlistContainer = () => {
  const [productos, setProductos] = useState ([]);
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  //const esPaginaPrincipal = categoria === undefined;

  useEffect(() =>{
    // const promesa = new Promise ((resolve) => {
    //   resolve (id ? arrayProductos.filter(item => item.categoria === id) :  arrayProductos);
    // })

    // promesa.then(data => {
    //   setProductos(data)
    // })
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const consulta = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;

    getDocs(consulta).then(resultado => {
      setLoading(false);
      setProductos(resultado.docs.map(productos => ({id: productos.id, ...productos.data()})));
    })

    //setProductos(esPaginaPrincipal ? arrayProductos : arrayProductos.filter(item => item.categoria === categoria))
    //[categoria, esPaginaPrincipal]);
  },[id]);

  return (

    <div className="container">
      {loading ? <Loading/> : <ItemList items = {productos}/>}
    </div>

  )
    
  
}


export default ItemlistContainer;