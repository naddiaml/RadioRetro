import React from 'react';
import './Contact.css';

import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='container'>
            <h2>CONTACTO</h2>
            <div className="contact__text-container">
                <span>Use este formulario de contacto o entre en contacto con nuestro <b><a href="#">equipo de soporte en línea</a></b> para obtener ayuda rápida y personalizada.</span>
                <span><b>Recuerde que estamos a su disposición </b>para responder a sus preguntas y asegurarnos de que su experiencia de compra sea excepcional.</span>
            </div>
            <div className="contact__form-container">
                <form className="contact__form">
                    <fieldset>
                        <label htmlFor="name" className='fieldset-label'>Nombre <span className="required">*</span></label>
                        <input name='name' type="text" placeholder="Ingresá tu nombre" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="surname" className='fieldset-label'>Apellido <span className="required">*</span></label>
                        <input name='surname' type="text" placeholder="Ingresá tu apellido" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email" className='fieldset-label'>Email <span className="required">*</span></label>
                        <input name='email' type="email" placeholder="nombre@dominio.com" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="tel" className='fieldset-label'>Teléfono <span className="required">*</span></label>
                        <input name='tel' type="tel" placeholder="Ingresá tu teléfono" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="topic" className='fieldset-label'>Tema <span className="required">*</span></label>
                        <div className="select__container">
                            <select id="topic" name="provincia" required>
                                <option value="Cambios y devoluciones">Cambios y devoluciones</option>
                                <option value="Seguimiento de envío">Seguimiento de envío</option>
                                <option value="Quiero hacer una compra fuera de Argentina">Quiero hacer una compra fuera de Argentina</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="message">Mensaje <span className="required">*</span> </label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje" required></textarea>
                    </fieldset>
                    <div className="cta-button__container">
                        <button className="submit-button" type="submit">
                            Finalizar compra
                            <Link to='#'></Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact