import React from 'react'
import InfoCommon from "../InfoCommon/InfoCommon.jsx";

const PaymentMethods = () => {
  return (
    <div>
      <InfoCommon pageTitle={"Medios de pago"}>
        <div>
          <p>Queremos brindarte opciones de pago flexibles y seguras para completar tu compra con comodidad. Sin embargo, actualmente sólo aceptamos pagos <b>mediante transferencia bancaria y/o MercadoPago</b>, proporcionándote detalles precisos de la cuenta destino al generar tu orden de compra.</p>
          <p>Esta opción te permite realizar el pago directamente desde tu entidad bancaria de preferencia, garantizando un proceso transparente y seguro.</p>
          <p>Recuerda notificarnos una vez completado el proceso para agilizar la confirmación de tu pago y proceder con el envío de tu radio.</p>
          <p>Entendemos la importancia de contar con alternativas de pago que se adapten a tus preferencias, por lo que continuamente estamos evaluando nuevas opciones o métodos de pago para ofrecerte aún más flexibilidad en un futuro. Tu satisfacción es nuestra prioridad, y estamos para facilitarte cada paso que quieras dar en tu experiencia de compra radiofónica.</p>
          <p>Si tienes alguna pregunta adicional sobre nuestros medios de pago, no dudes en ponerte en contacto con nuestro <b>equipo de soporte</b>.</p>
        </div>
      </InfoCommon >
    </div >
  )
}

export default PaymentMethods;