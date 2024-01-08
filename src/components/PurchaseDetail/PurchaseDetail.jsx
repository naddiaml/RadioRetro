import React, { useContext } from "react";
import './PurchaseDetail.css';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import emptyCartImg from '../../assets/emptyCart.svg';
import CtaButton from "../CtaButton/CtaButton";
import CartNavigation from "../CartNavigation/CartNavigation";

const PurchaseDetail = () => {
    const { cart, removeFromCart, getTotalQuantity } = useContext(CartContext);

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    };

    const calculateTotalCartPrice = () => {
        const total = cart.reduce((total, item) => {
            const subtotal = calculateTotalPrice(item);
            return total + subtotal;
        }, 0);
        return total;
    };

    const handleRemoveProduct = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="container">
            {cart.length === 0 ? (
                <div className="empty-cart__items-container">
                    <h2>TU CARRITO</h2>
                    <img src={emptyCartImg} alt="El carrito está vacío." className="empty_cart__img" />
                    <p className="empty-cart__p">En este momento, <b>no hay productos en tu carrito.</b></p>
                    <CtaButton buttonLink={'/tienda'} buttonTitle={'Volver a la tienda'} buttonText='Volver a la tienda' />
                </div>
            ) : (
                <div>
                    <CartNavigation />
                    <table className="cart__table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id} className="cart__item">
                                    <td>
                                        <div className="cart__remove-products" onClick={() => handleRemoveProduct(item.id)} title="Elimina este producto de tu carrito">
                                            <span>
                                                <i className="fa-solid fa-xmark"></i>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart_item_info">
                                            <img src={item.image} alt={item.name} />
                                            <div title={item.name}>
                                                <Link to={`/tienda/${item.category}/${item.id}`} >
                                                    <p className="cart__product-name">{item.name.length > 30 ? item.name.slice(0, 33) + '...' : item.name}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </td>
                                    <td>$ {item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>$ {calculateTotalPrice(item)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="total-price__container">
                        <span>Total</span>
                        <span>$ {calculateTotalCartPrice()}</span>
                    </div>
                    <CtaButton buttonLink={'/checkout'} buttonText={"Continuar con la compra"} />
                </div>
            )
            }
        </div >
    );
};

export default PurchaseDetail;