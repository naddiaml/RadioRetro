import React from 'react';
import './Footer.css';
import logo from '../Footer/RadioRetro-WLogo.webp';

import { Link } from 'react-router-dom'

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
                            <Link to="/store">Tienda</Link>
                        </li>
                        <li>
                            <Link to="">Transistorizadas</Link>
                        </li>
                        <li>
                            <Link to="">Valvulares</Link>
                        </li>
                        <li>
                            <Link to="">Portátiles</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__links-container">
                    <ul>
                        <li>
                            <Link to="#">+ Info</Link>
                        </li>
                        <li>
                            <Link to="#">Sobre Nosotros</Link>
                        </li>
                        <li>
                            <Link to="#">Medios de pago</Link>
                        </li>
                        <li>
                            <Link to="#">Cómo comprar</Link>
                        </li>
                        <li>
                            <Link to="#">Métodos de envío</Link>
                        </li>
                        <li>
                            <Link to="#">Contacto</Link>
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
        </div>
    )
}

export default Footer