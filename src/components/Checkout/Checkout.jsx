import React, { useContext, useState, useEffect } from 'react';
import './Checkout.css';

import CartNavigation from '../CartNavigation/CartNavigation.jsx';

import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { precioTotal } from '../../utilities/utilities.js';
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');
    const [provincias, setProvincias] = useState([]);
    const [municipiosODepartamentos, setMunicipiosODepartamentos] = useState(['Seleccioná un municipio/departamento']);
    const { register, handleSubmit, watch } = useForm();
    const selectedProvincia = watch('provincia');
    const navigate = useNavigate();
    const { clearCart } = useContext(CartContext);

    const finalizarCompra = async (data) => {
        try {
            const { name, surname, email, tel, provincia, municipioODepartamento, address, notes, payment } = data;
            const country = 'Argentina';
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

            const pedido = {
                datosDelComprador: { name, surname, email, tel },
                datosDelEnvio: { country, provincia, municipioODepartamento, address },
                productosComprados: storedCart,
                notasDelPedido: notes,
                medioDePago: payment,
                status: "Pendiente",
                total: precioTotal(storedCart),
            };

            localStorage.removeItem('cart');

            const pedidosRef = collection(db, 'pedidos');
            const docRef = await addDoc(pedidosRef, pedido);

            setPedidoId(docRef.id);

            clearCart();

            return docRef.id;
        } catch (error) {
            console.error('Error al procesar la compra:', error);
            throw error;
        }
    };

    const handleFormSubmit = async (data) => {
        try {
            const idPedido = await finalizarCompra(data);
            navigate(`/orden/${idPedido}`);
        } catch (error) {
            console.error('Error al finalizar la compra:', error);
        }
    };

    useEffect(() => {
    }, [pedidoId]);

    const fetchProvincias = () => {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                const provinciasArray = json.provincias.map(provincia => provincia.nombre);
                const provinciasOrdenadas = provinciasArray.sort((a, b) => a.localeCompare(b));
                setProvincias(['Seleccioná una provincia', ...provinciasOrdenadas]);
            })
            .catch(error => {
                console.error(`Error: ${error.status}: ${error.statusText}`);
            });
    };

    const fetchMunicipiosODepartamentos = (provincia) => {
        const urlMunicipios = `https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}&max=529`;
        const urlDepartamentos = `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia}&max=529`;

        Promise.all([
            fetch(urlMunicipios).then(response => response.json()),
            fetch(urlDepartamentos).then(response => response.json())
        ])
            .then(([municipios, departamentos]) => {
                const opciones = [];

                municipios.municipios.forEach(el => opciones.push(el.nombre));
                departamentos.departamentos.forEach(el => opciones.push(el.nombre));

                const opcionesUnicas = Array.from(new Set(opciones));

                opcionesUnicas.sort((a, b) => a.localeCompare(b));

                setMunicipiosODepartamentos(['Seleccioná un municipio/departamento', ...opcionesUnicas]);
            })
            .catch(error => {
                console.error(`Error: ${error.status}: ${error.statusText}`);
            });
    };

    useEffect(() => {
        fetchProvincias();
    }, []);

    useEffect(() => {
        if (selectedProvincia && selectedProvincia !== 'Seleccioná una provincia') {
            fetchMunicipiosODepartamentos(selectedProvincia);
        }
    }, [selectedProvincia]);

    return (
        <div className="container">
            <div className="checkout__items-container">
                <CartNavigation />
                <div className="checkout__text-container">
                    <span>Estás a un solo paso de finalizar tu compra! 🎉</span>
                    <span>Por favor, completa los campos a continuación con los <b>datos del comprador</b> y <b>dirección de envío</b>.</span>
                </div>
                <div className="form__container">
                    <form className="checkout__form" onSubmit={handleSubmit(handleFormSubmit)}>
                        <fieldset>
                            <label htmlFor="name" className='fieldset-label'>Nombre <span className="required">*</span></label>
                            <input type="text" placeholder="Ingresá tu nombre" {...register('name')} required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="surname" className='fieldset-label'>Apellido <span className="required">*</span></label>
                            <input type="text" placeholder="Ingresá tu apellido" {...register('surname')} required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email" className='fieldset-label'>Email <span className="required">*</span></label>
                            <input type="email" placeholder="Ingresá tu e-mail" {...register('email')} required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="tel">Teléfono <span className="required">*</span>
                            </label>
                            <input type="tel" placeholder='Ingresa tu número de teléfono' {...register('tel')} required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="country">País <span className="required">*</span></label>
                            <input type="text" value="Argentina" disabled />
                        </fieldset>

                        <fieldset>
                            <label htmlFor="selectProvincias">Provincia
                                <span className="required">*</span>
                            </label>
                            <div className="select__container">
                                <select id="selectProvincias" name="provincia" {...register('provincia', { required: true })}>
                                    {provincias.map((provincia, index) => (
                                        <option key={index} value={provincia}>
                                            {provincia}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="selectMunicipiosODepartamentos">Municipio/Departamento
                                <span className="required">*</span>
                            </label>
                            <div className="select__container">
                                <select
                                    id="selectMunicipiosODepartamentos"
                                    name="municipioODepartamento"
                                    {...register('municipioODepartamento', { required: true })}
                                    className={(!selectedProvincia || selectedProvincia === 'Seleccioná una provincia') ? 'disabled-select' : ''}
                                    disabled={!selectedProvincia || selectedProvincia === 'Seleccioná una provincia'}
                                >
                                    {(!selectedProvincia || selectedProvincia === 'Seleccioná una provincia') ? (
                                        <option value="">Seleccioná un municipio/departamento</option>
                                    ) : (
                                        municipiosODepartamentos.map((municipioODepartamento, index) => (
                                            <option key={index} value={municipioODepartamento}>
                                                {municipioODepartamento}
                                            </option>
                                        ))
                                    )}
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="address" className='fieldset-label'>Dirección de envío <span className="required">*</span></label>
                            <input type="text" placeholder="Ingresá la dirección de envío (Calle y número)" {...register('address')} required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="notes">Notas del pedido <span className="not-required">(Opcional)</span> </label>
                            <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Notas del pedido" {...register('notes')}></textarea>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="payment" className="fieldset-label payment-label">
                                Medio de pago:
                            </label>
                            <label htmlFor="payment1">
                                <input type="radio" name="payment" id="payment1" value="MercadoPago" {...register('payment', { required: true })} required />
                                MercadoPago
                            </label>
                            <label htmlFor="payment1">
                                <input type="radio" name="payment" id="payment1" value="Transferencia Bancaria" {...register('payment', { required: true })} required />
                                Transferencia Bancaria
                            </label>
                        </fieldset>
                        <div className="cta-button__container">
                            <button className="submit-button" type="submit">
                                Finalizar compra
                                {pedidoId && (
                                    <Link to={`/orden/${pedidoId}`}></Link>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Checkout;