import React from 'react'
import InfoCommon from "../InfoCommon/InfoCommon.jsx";

const PaymentMethods = () => {
  return (
    <div>
      <InfoCommon pageTitle={"Información sobre envíos"}>
        <div>
          <p>Nuestro proceso de envío está diseñado para proporcionar <b>flexibilidad</b> y <b>satisfacer las necesidades tanto del comprador como del vendedor</b>.</p>
          <p>En la mayoría de los casos, el <b>costo y la responsabilidad del envío recaerán en el comprador</b>. Sin embargo, para garantizar la mejor experiencia posible, recomendamos que una vez realizada compra entres en contacto con nuestro <b><a href="#">soporte</a></b> para discutir las opciones de envío. De este modo, podremos ofrecerte las mejores alternativas basándonos experiencias anteriores, lo que nos permitirá colaborar para encontrar la solución de envío más conveniente y eficiente para ambas partes. La transparencia en la comunicación sobre los detalles del envío es fundamental para asegurar una experiencia satisfactoria.</p>
          <p>Recordá que una vez realizada la compra, podés realizar el seguimiento de la misma desde el siguiente link: <b><a href="#">seguimiento de compra</a></b>, o bien enviando un mensaje a nuestra <b><a href="#">linea de soporte</a></b> seleccionando la opción correspondiente y la <b>referencia de tu pedido</b>.</p>
        </div>
      </InfoCommon >
    </div >
  )
}

export default PaymentMethods;