import "./Info.css";
import infoImg from '../../assets/info.svg'

const Info = () => {
    return (
        <div className="container">
            <h2>+ INFO</h2>
            <div className="info__text-container">
                <p>Descubre todo lo necesario antes de disfrutar de la experiencia de comprar en nuestra tienda.</p>
                <p>Obtén detalles <b>sobre nosotros</b>, <b>políticas de envío</b>, <b>métodos de pago</b> y el <b>sencillo proceso de compra</b>. Nos esforzamos por ofrecer una experiencia completa y transparente.</p>
                <p>Si tienes dudas o no encuentras lo que buscas, nuestro equipo de soporte está aquí para ayudarte. ¡Bienvenido a tu experiencia de compras en nuestra tienda!</p>
            </div>
            <div className="info__items-container">
                <div><a href="#" title="Sobre nosotros"><i className="fa-solid fa-plus"></i>Sobre nosotros</a></div>
                <div><a href="#" title="Cómo comprar"><i className="fa-solid fa-plus"></i>Cómo comprar</a></div>
                <div><a href="#" title="Medios de pago"><i className="fa-solid fa-plus"></i>Medios de pago</a></div>
                <div><a href="#" title="Métodos de envío"><i className="fa-solid fa-plus"></i>Métodos de envío</a></div>
                <div><a href="#" title="Seguimiento de compra"><i className="fa-solid fa-plus"></i>Seguimiento de compra</a></div>
                <div><a href="#" title="Después de comprar"><i className="fa-solid fa-plus"></i>Después de comprar</a></div>
                <div><a href="#" title="Contacto"><i className="fa-solid fa-plus"></i>Contacto</a></div>
            </div>
            <div className="info__image-container">
                <img className="info__image" src={infoImg} alt="" />
            </div>
        </div>
    )
}

export default Info