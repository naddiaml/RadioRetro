import './Hero.css';
import heroRadioImg from "./SHARP-FV17000.webp";

import HeroGreeting from '../HeroGreeting/HeroGreeting';

const ctaTienda = "Ir a la tienda";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__items-container">
                <div className="hero__left-container">
                    <HeroGreeting greeting={"Reparamos tu radio antigua"}/>
                    <p>Brindando a nuestros clientes ese toque especial de añoranza que están buscando, reparamos tu radio analógica para que puedas disfrutar al máximo el contenido de tu interés.</p>
                    <div className="button-container">
                        <button className="cta" style={{ textTransform: 'uppercase' }} title={ctaTienda}>{ctaTienda}</button>
                        <span className='hero__span'>SABER MÁS
                            <span className="material-icons chevron">
                                chevron_right
                            </span>
                        </span>
                    </div>
                </div>
                <div className="hero__right-container">
                    <img src={heroRadioImg} alt="Sharp FV-17000" title="Sharp FV-17000" className='hero__img'/>
                </div>
            </div>
            <span className="material-icons hero__scroll chevron" title='Sigamos más abajo!'>
                expand_more
            </span>
        </section>
    )
}

export default Hero