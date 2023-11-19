import "./NavBar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import data from "../../data/products.json";

import { Link } from "react-router-dom";

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
                    <li className="link current">
                        <Link to="/">
                            INICIO
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/store/transistorizadas">
                            TRANSISTORIZADAS
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/store/valvulares">
                            VALVULARES
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/store/portátiles">
                            PORTÁTILES
                        </Link>
                    </li>

                    <li className="link">
                        <Link to="/">
                            CONTACTO
                        </Link>
                    </li>

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