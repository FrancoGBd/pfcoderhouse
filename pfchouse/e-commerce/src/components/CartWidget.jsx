import cartImage from '../images/cart.png';


const CartWidget = () => {
  return (
    <div>
      <img src={cartImage} alt="cart" />
      <p>4</p>
    </div>
  );
}

export default CartWidget;