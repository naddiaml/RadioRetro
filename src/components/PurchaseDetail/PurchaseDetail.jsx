import React, { useContext } from "react";
import './PurchaseDetail.css';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import emptyCartImg from '../../assets/emptyCart.svg';

const PurchaseDetail = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotalCartPrice = () => {
        return cart.reduce((total, item) => total + calculateTotalPrice(item), 0);
    };

    const handleRemoveProduct = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="container">
            <h2>TU CARRITO</h2>
            {cart.length === 0 ? (
                <div className="empty-cart__items-container">
                    <img src={emptyCartImg} alt="El carrito está vacío." className="empty_cart__img" />
                    <p className="empty-cart__p">En este momento, <b>no hay productos en tu carrito.</b></p>
                    <button className="store-button">
                        <Link to={"/store"}>
                            VOLVER A LA TIENDA
                        </Link>
                    </button>
                </div>
            ) : (
                <div>
                    <ul className="cart__items-container">
                        {cart.map((item) => (
                            <li key={item.id} className="cart__item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart__product-details">
                                    <div>
                                        <p className="cart__product-name"><b>{item.name}</b></p>
                                        <p className="cart__product-uprice">Precio por unidad: $ {item.price}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p><b>Precio:</b> $ {calculateTotalPrice(item)}</p>
                                    </div>
                                    <p className="cart__remove-products" onClick={() => handleRemoveProduct(item.id)}>
                                        <span>
                                            <i className="fa-solid fa-xmark"></i>
                                        </span>
                                        Eliminar producto
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="cart__total-price">Total: <span>$ {calculateTotalCartPrice()}</span></p>
                    <div className="cart__checkout-button">
                        <Link to={'/checkout'}>
                            <button className='button__buy-cart'>Finalizar compra</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PurchaseDetail;