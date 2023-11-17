import "./Header.css";
import logo from "./RadioRetro-BLogo.webp";

import NavBar from "../NavBar/NavBar.jsx";

const Header = () => {
  return (
    <div className="header__container">
      <header>
        <a href="./index.html" title="Ir a la página principal">
          <img src={logo} alt="" className="logo" />
        </a>
        <NavBar className={NavBar} />
      </header>
    </div>
  )
}

export default Header