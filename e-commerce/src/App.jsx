import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from './components/Catalogo';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/context/CartContext';
// import Contacto from './components/contacto';
import CheckOut from './components/CheckOut';


function App() {

  return (
    <BrowserRouter>
    <CartContextProvider>  
      <Header/>
      <Routes>
        <Route path='/' element={<Catalogo/>}/>
        <Route path='/categoria/:id' element={<Catalogo/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        {/* <Route path='/contacto' element={<Contacto/>}/>*/}
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      <Footer/>
    </CartContextProvider>
    </BrowserRouter>
  )
}


export default App;
