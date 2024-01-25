import React from 'react'
import InfoCommon from "../InfoCommon/InfoCommon.jsx";
import CtaButton from '../CtaButton/CtaButton.jsx';

const HowToBuy = () => {
    return (
        <div>
            <InfoCommon pageTitle={"Cómo comprar"}>
                <div>
                    <p>Comprar en nuestra tienda es fácil y seguro. Sigue estos simples pasos para obtener tu radio deseada y sumergirte en el mundo emocionante de las radios:</p>
                    <ol>
                        <li><p><b>Explora nuestro catálogo:</b> Navega por nuestra amplia selección de radios reacondicionadas y descubre modelos únicos y de alta calidad. Si buscas una cotización para la reparación de tu radio, también estamos aquí para ayudarte.</p></li>
                        <li><p><b>Selecciona tu producto:</b> Una vez que encuentres la radio que te enamore, añádela al carrito de compras. Puedes revisar tu selección antes de proceder al pago.</p></li>
                        <li><p><b>Proceso de pago seguro:</b> Completa tu compra y selecciona la opción de pago de tu conveniencia. Recibirás instrucciones detalladas sobre la cuenta a la cual realizar la transferencia una vez generada tu orden de compra. Una vez completado el proceso, asegúrate de notificarnos mediante algunas de las vías indicadas para que podamos agilizar la confirmación de tu pago y proceder con el envío de tu radio. Si tienes alguna pregunta o necesitas asistencia durante este proceso, nuestro equipo de soporte está disponible para ayudarte en cualquier momento.</p></li>
                        <li><p><b>Envío rápido y confiable:</b> Después de recibir la confirmación de tu pago, nos encargaremos de empaquetar cuidadosamente tu radio. Te invitamos a coordinar la logística del envío directamente con nuestro equipo, quienes estarán encantados de ofrecerte diversas opciones para que elijas la que mejor se adapte a tus requerimientos.</p></li>
                        <li><p><b>Consulta nuestro soporte:</b> ¿Tienes preguntas durante el proceso de compra? No dudes en contactar a nuestro equipo de soporte online. Estamos aquí para ayudarte y asegurarnos de que tu experiencia de compra sea excepcional.</p></li>
                    </ol>
                    <p>¡Gracias por elegirnos como tu destino para todo lo relacionado con radios! Estamos emocionados de ser parte de tu viaje radiofónico.</p>
                    <CtaButton buttonLink={'/tienda'} buttonTitle={'Ir a la tienda'} buttonText='Ir a la tienda' />
                </div>
            </InfoCommon>
        </div>
    )
}

export default HowToBuy;