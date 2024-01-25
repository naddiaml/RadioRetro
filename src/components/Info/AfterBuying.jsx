import React from 'react'
import InfoCommon from "../InfoCommon/InfoCommon.jsx";

const AfterBuying = () => {
  return (
    <div>
      <InfoCommon pageTitle={"¿Cómo seguir después de una compra?"}>
        <div>
          <p>Una vez que tu orden ya fue generada, realizaste el pago y enviaste el comprobante mediante algunas de las vías indicadas, podés realizar el seguimiento de tu compra desde el siguiente link: <b><a href="#">seguimiento de compra</a></b>, o bien enviando un mensaje a nuestra <b><a href="#">linea de soporte</a></b> seleccionando la opción correspondiente y la referencia de tu pedido (la cual se indica al finalizar la compra y .se envía también al email del comprador).</p>
          <p>Además, te acercamos el <b><a href="#">botón de arrepentimiento</a></b>.</p>
        </div>
      </InfoCommon>
    </div>
  )
}

export default AfterBuying;