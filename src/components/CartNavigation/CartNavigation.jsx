import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './CartNavigation.css';

const CartNavigation = () => {
    const location = useLocation();
    const { orderID } = useParams();

    return (
        <div className="purchase-detail__navigation">
            {location.pathname === "/checkout" ? (
                <Link to="/mi-carrito">
                    <h2 className={location.pathname === "/mi-carrito" ? "current" : "link-to-cart"}>TU CARRITO</h2>
                </Link>
            ) : (
                <h2 className={location.pathname === "/mi-carrito" ? "current" : ""}>
                    TU CARRITO
                </h2>
            )}
            <span className="chevron">
                <i className="fa-solid fa-chevron-right"></i>
            </span>
            <h2 className={location.pathname === "/checkout" ? "current" : ""}>
                CONFIRMACIÓN DE COMPRA
            </h2>
            <span className="chevron">
                <i className="fa-solid fa-chevron-right"></i>
            </span>
            <h2 className={location.pathname === `/orden/${orderID}` ? "current" : ""}>
                ORDEN COMPLETA
            </h2>
        </div>
    );
}

export default CartNavigation;