import React from 'react';
import './Footer.css';
import logo from '../Footer/RadioRetro-WLogo.webp';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer__logo-container">
                    <Link to="/">
                        <img src={logo} alt="Radio Retro - Logo" />
                    </Link>
                </div>
                <div className="footer__links-container">
                    <ul>
                        <li>
                            <Link to="/tienda">Tienda</Link>
                        </li>
                        <li>
                            <Link to="/tienda/transistorizadas">Transistorizadas</Link>
                        </li>
                        <li>
                            <Link to="/tienda/valvulares">Valvulares</Link>
                        </li>
                        <li>
                            <Link to="/tienda/portátiles">Portátiles</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__links-container">
                    <ul>
                        <li>
                            <Link to="/info">+ Info</Link>
                        </li>
                        <li>
                            <Link to="/info/sobre-nosotros">Sobre Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/info/como-comprar">Cómo comprar</Link>
                        </li>
                        <li>
                            <Link to="/info/medios-de-pago">Medios de pago</Link>
                        </li>
                        <li>
                            <Link to="/info/sobre-envios">Sobre envíos</Link>
                        </li>
                        <li>
                            <Link to="/info/despues-de-comprar">Después de comprar</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contáctanos</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__social-container">
                    <p>SEGUINOS EN LAS REDES Y ENTERATE DE NUESTRAS ÚLTIMAS NOVEDADES!</p>
                    <div className="footer__social">
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-square-x-twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>
            <div className="copy-container">
                <span>© Copyright Radio Retro 2023  |  All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer