import React, { useEffect, useState } from 'react';

import './OrderDetails.css';
import CompleteOrder from '../../assets/complete-order.svg';
import CartNavigation from '../CartNavigation/CartNavigation.jsx';
import CtaButton from '../CtaButton/CtaButton.jsx';

import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const OrderDetails = () => {
    const { orderID } = useParams();
    const [orderData, setOrderData] = useState(null);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const orderDocRef = doc(db, 'pedidos', orderID);
                const orderSnapshot = await getDoc(orderDocRef);

                if (orderSnapshot.exists()) {
                    setOrderData(orderSnapshot.data());
                } else {
                    console.log('Orden no encontrada');
                }
            } catch (error) {
                console.error('Error al obtener los detalles de la orden:', error);
            }
        };

        fetchOrderData();
    }, [orderID]);

    return (
        <div className="container">
            <CartNavigation />
            <div className="order-details__text-container">
                <h3>Muchas gracias por tu compra!</h3>
                <p>La referencia de tu pedido es: <b>{orderID.slice(0, 10)}</b>.</p>
                <p>Pronto recibirás un  email con el detalle de tu compra; sin embargo, recordá que <b>la misma no se procesará hasta que se haya recibido el importe de la compra en la cuenta destino</b>.</p>
            </div>
            <div className="payment-advise">
                <span className="payment-advise__icon"><i className="fa-solid fa-circle-exclamation"></i></span>
                <div className="payment-advise__text-container">
                    <p>Por favor, usa la referencia de tu pedido como concepto a la hora de hacer el pago o transferencia.</p>
                    <div className="divider"></div>
                    <p>Una vez hecho el pago o transferencia, por favor envía el comprobante al siguiente número o email:</p>
                    <div className="payment-advise__items-container">
                        <div className="payment-advise__item">
                            <span><i className="fa-brands fa-whatsapp"></i></span>
                            <span>+54 911 2233-4455</span>
                        </div>
                        <div className="payment-advise__item">
                            <span><i className="fa-solid fa-envelope"></i></span>
                            <span>pagos@radioretro.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order-details__bank-account-data-container">
                <img src={CompleteOrder} alt="Orden completa!" />
                <div className="order-details__bank-account">
                    <span><b>Datos para transferencia:</b></span>
                    <span><b>Ualá</b></span>
                    <span><b>Titular:</b> Iván Alejandro Mlinarevic</span>
                    <span><b>CUIL:</b> xx-12345678-x</span>
                    <span><b>Alias:</b> RadioRetro</span>
                    <span><b>CBU/CVU:</b> 0000000000000000000000</span>
                </div>
            </div>
            <div className="divider w-80"></div>
            <div className="order-details__data">
                {orderData && (
                    <div className='buyer-data'>
                        <span><b>Información de tu compra:</b></span>
                        <span><b>Comprador:</b> {orderData.datosDelComprador.name} {orderData.datosDelComprador.surname}</span>
                        <span><b>Estado del pedido:</b> {orderData.status}</span>
                        <span><b>Medio de pago:</b> {orderData.medioDePago}</span>
                        <span className='default-info'><b>Método de envío:</b> Acordar</span>
                        <span><b>Dirección del envío:</b> {orderData.datosDelEnvio.address}, {orderData.datosDelEnvio.municipioODepartamento}, {orderData.datosDelEnvio.provincia}, {orderData.datosDelEnvio.country}.</span>
                    </div>
                )}
                {orderData && (
                    <div className="cart-data">
                        {orderData.productosComprados.map((product, index) => (
                            <div key={index} className="product">
                                <img src={product.image} alt={product.name} title={product.name} />
                                <div className="product-data">
                                    <span><b>{product.quantity}</b></span>
                                    <span><b>{product.name}</b></span>
                                    <span>${product.price * product.quantity}</span>
                                </div>
                            </div>

                        ))}
                        {orderData && (
                            <div className="total-price__container">
                                <span>Total</span><span>$ {orderData.total}</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <CtaButton buttonLink={"/tienda"} buttonText={"Volver a la tienda"} />
        </div>
    );
};

export default OrderDetails;