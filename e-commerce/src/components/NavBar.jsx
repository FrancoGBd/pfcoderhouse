//import Combos from "./Combos";
import { Link } from "react-router-dom";



 const NavBar = () => {
     return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link text-dark fs-8" to={"/"}>Pagina Principal</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-8" to={"/categoria/Bebidas-Alcoholicas"}>Bebidas Alcohlicas</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-8" to={"/categoria/Bebidas-sin-alcohol"}>Bebidas sin Alcohol</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-dark fs-8" to={"/contacto"}>Contacto</Link>
            </li>
        </ul>
     )
}

export default NavBar;