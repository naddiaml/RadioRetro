import React, { useContext } from "react";
import './PurchaseDetail.css';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

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
                    <img src="src\components\PurchaseDetail\emptyCart.svg" alt="El carrito está vacío." className="empty_cart__img" />
                    <p className="empty-cart__p">En este momento, <b>no hay productos en tu carrito.</b></p>
                    <p className="empty-cart__p">Haz click <Link to="/store">aquí</Link> para visitar nuestra tienda y agregar los productos de tu interés a tu carrito.
                    </p>
                </div>
            ) : (
                <div>
                    <ul className="cart__items-container">
                        {cart.map((item) => (
                            <li key={item.id} className="cart__item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart__product-details">
                                    <p className="cart__product-name"><b>{item.name}</b></p>
                                    <p className="cart__product-uprice">Precio por unidad: $ {item.price}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p><b>Precio:</b> $ {calculateTotalPrice(item)}</p>
                                    <p className="cart__remove-products" onClick={() => handleRemoveProduct(item.id)}>
                                        <span className="material-icons">
                                            delete
                                        </span>
                                        Eliminar producto
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="cart__total-price">Total: <span>$ {calculateTotalCartPrice()}</span></p>
                </div>
            )}
        </div>
    );
};

export default PurchaseDetail;