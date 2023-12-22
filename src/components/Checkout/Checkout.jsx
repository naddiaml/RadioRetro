import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { precioTotal } from '../../utilities/utilities.js';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');
    const { register, handleSubmit } = useForm();

    const comprar = async (data) => {
        try {
            const { name, surname, email, payment } = data;
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

            const pedido = {
                cliente: { name, surname, email },
                productos: storedCart,
                total: precioTotal(storedCart),
                pago: payment,
            };

            const pedidosRef = collection(db, 'pedidos');
            const docRef = await addDoc(pedidosRef, pedido);

            setPedidoId(docRef.id);
        } catch (error) {
            console.error('Error al procesar la compra:', error);
        }
    };

    useEffect(() => {
    }, [pedidoId]);

    if (pedidoId) {
        return (
            <div className="container">
                <div className="checout__post-purchase">
                    <h2 className="main-title">Muchas gracias por tu compra!</h2>
                    <span>Nos pondremos en contacto a la brevedad.</span>
                    <br />
                    <p>Tu número de pedido es: <b>{pedidoId}</b></p>
                    <img src="./src\components\Checkout\successfulPurchase.svg" alt="Realizaste tu compra con éxito!" className="successful-purchase__img" />
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="checkout__items-container">
                <h2>Finalizar compra</h2>
                <span>Estás a un solo paso de finalizar tu compra!</span>
                <div className="form__container">
                    <form className="checkout__form" onSubmit={handleSubmit(comprar)}>
                        <fieldset>
                            <label htmlFor="name" className='fieldset-label'>Nombre <span className="required">*</span></label>
                            <input type="text" placeholder="Ingresá tu nombre" {...register('name')} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="surname" className='fieldset-label'>Apellido <span className="required">*</span></label>
                            <input type="text" placeholder="Ingresá tu apellido" {...register('surname')} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email" className='fieldset-label'>Email <span className="required">*</span></label>
                            <input type="email" placeholder="Ingresá tu e-mail" {...register('email')} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="payment" className="fieldset-label payment-label">
                                Medio de pago:
                            </label>
                            <label htmlFor="payment1">
                                <input type="radio" name="payment" id="payment1" value="MercadoPago" {...register('payment', { required: true })} />
                                MercadoPago
                            </label>
                            <label htmlFor="payment1">
                                <input type="radio" name="payment" id="payment1" value="Transferencia Bancaria" {...register('payment', { required: true })} />
                                Transferencia Bancaria
                            </label>
                        </fieldset>
                        <button className="enviar" type="submit">
                            Comprar
                        </button>

                    </form>
                </div>
            </div>
        </div >
    );
};

export default Checkout;