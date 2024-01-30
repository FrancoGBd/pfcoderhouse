import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className='nav'> 
        <h3>Vinos</h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
  )
}

export default NavBar