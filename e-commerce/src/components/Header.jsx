import LogoBebidas from "./LogoBebidas";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <LogoBebidas tamano={"70px"} />
            </div>
            <div className="col-md-9 d-flex aling-items-center m-3 p-0 justify-content-start">
                <NavBar/>
            </div>
            <div className="col">
                <CartWidget/>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Header