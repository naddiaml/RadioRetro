import "./NavBar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();

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
                    <li className={location.pathname === "/" ? "link current" : "link"}>
                        <Link to="/">
                            INICIO
                        </Link>
                    </li>

                    <li className={location.pathname === "/store/transistorizadas" ? "link current" : "link"}>
                        <Link to="/store/transistorizadas">
                            TRANSISTORIZADAS
                        </Link>
                    </li>

                    <li className={location.pathname === "/store/valvulares" ? "link current" : "link"}>
                        <Link to="/store/valvulares">
                            VALVULARES
                        </Link>
                    </li>

                    <li className={location.pathname === "/store/portátiles" ? "link current" : "link"}>
                        <Link to="/store/portátiles">
                            PORTÁTILES
                        </Link>
                    </li>

                    <li className={location.pathname === "/contacto" ? "link current" : "link"}>
                        <Link to="/contacto">
                            CONTACTO
                        </Link>
                    </li>

                    <div className="icons-container">
                        <li className="link">
                            <ShoppingCart />
                        </li>
                    </div>
                </ul>
                <div className="icons-container">
                </div>
            </nav>
        </div>
    );
}

export default NavBar;