import "./Header.css";
import logo from "./RadioRetro-BLogo.webp";

import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar.jsx";

const Header = () => {
  return (
    <div className="header__container">
      <header>
        <Link to="/" title="Ir a la página principal">
          <img src={logo} alt="" className="logo" />
        </Link>
        <NavBar className={NavBar} />
      </header>
    </div>
  )
}

export default Header