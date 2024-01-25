import React from 'react'
import InfoCommon from "../InfoCommon/InfoCommon.jsx";

const AboutUs = () => {
    return (
        <div>
            <InfoCommon pageTitle={"Sobre nosotros"}>
                <div>
                    <p>¡Bienvenidos a <b>RadioRetro</b>, donde la pasión por la radio se encuentra con la excelencia en servicio!</p>
                    <p>Somos un equipo apasionado de entusiastas de la radio, y nos enorgullece ofrecer una selección de radios reacondicionadas, cuidadosamente restauradas para brindar un rendimiento óptimo y duradero.</p>
                    <p>Además de nuestra colección única, ofrecemos un servicio adicional: la <b>cotización de arreglos</b> para esas radios especiales que quizás no encuentres en nuestro catálogo. Valoramos cada oportunidad de trabajar en la restauración y reparación de radios, ya que creemos que <b>cada pieza cuenta una historia única</b>.</p>
                    <p>Nuestro compromiso va más allá de la venta; nos esforzamos por ser tu recurso confiable en el fascinante mundo de las radios antiguas.</p>
                    <p>Ante cualquier duda, no dudes en ponerte en contacto con nosotros a través de nuestra <b><a href="#">línea de soporte</a></b> o bien vía email a <b>info@radioretro.com</b>.</p>
                </div>
            </InfoCommon>
        </div>
    )
}

export default AboutUs;