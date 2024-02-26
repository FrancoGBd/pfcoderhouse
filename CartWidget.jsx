import { useContext } from 'react';
import IconCart from '../assets/cart.svg';
import { CartContext } from './context/CartContext';
import { Link } from "react-router-dom";

const CartWidget = () => {  

  const {totalProductos} = useContext(CartContext);


  return (
    <div>
      <Link to='/checkout' className='text-decoration-none'>
        <img  className='mt-3' width={30} src={IconCart} alt="cart" /> 
        {totalProductos()}
      </Link>
    </div>
  );
}

export default CartWidget;