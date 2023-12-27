import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCart.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        const quantity = getTotalQuantity();
        setTotalQuantity(quantity);
    }, [getTotalQuantity]);

    console.log("Total Quantity:", totalQuantity);

    return (
        <div>
            <Link to="/purchase">
                <div className="cart-itemsCounter">
                    <span>{totalQuantity}</span>
                </div>
                <span className="header__icon">
                    <i className="fa-solid fa-cart-shopping" title="Ver tu carrito"></i>
                </span>
            </Link>
        </div>
    );
};

export default ShoppingCart;