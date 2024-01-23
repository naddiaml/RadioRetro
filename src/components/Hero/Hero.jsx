import './Hero.css';
import heroRadioImg from "./SHARP-FV17000.webp";
import HeroGreeting from '../HeroGreeting/HeroGreeting';
import CtaButton from '../CtaButton/CtaButton.jsx';

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__items-container">
                <div className="hero__left-container">
                    <HeroGreeting greeting={"Reparamos tu radio antigua"} />
                    <p>Brindando a nuestros clientes ese toque especial de añoranza que están buscando, reparamos tu radio analógica para que puedas disfrutar al máximo el contenido de tu interés.</p>
                    <div className="button-container">
                        <CtaButton buttonText={'Cotizar'} />
                        <span className='hero__span'>
                            <Link to="/tienda">
                                IR A LA TIENDA
                                <span className="chevron">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </span>
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="hero__right-container">
                    <img src={heroRadioImg} alt="Sharp FV-17000" title="Sharp FV-17000" className='hero__img' />
                </div>
            </div>
            <span className="hero__scroll chevron" title='Sigamos más abajo!'>
                <i className="fa-solid fa-chevron-down"></i>
            </span>
        </section>
    )
}

export default Hero