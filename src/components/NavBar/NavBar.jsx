import "./NavBar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const NavBar = () => {
    return (
        <div>
            <input id="burger" type="checkbox" />
            <label htmlFor="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <nav id="menu">
                <ul className="header-menu">
                    <li className="link current">INICIO</li>
                    <li className="link">TRANSISTORIZADAS</li>
                    <li className="link">VALVULARES</li>
                    <li className="link">REGENERATIVAS</li>
                    <li className="link">CONTACTO</li>
                    <div className="icons-container">  
                        <li className="link">
                            <ShoppingCart />
                        </li>
                        <li className="link">
                            <span className="material-icons header__icons" title="Buscar"> search</span>
                        </li>
                    </div>
                </ul>
            <div className="icons-container">
                </div>
        </nav>
    </div>
    )
}

export default NavBar