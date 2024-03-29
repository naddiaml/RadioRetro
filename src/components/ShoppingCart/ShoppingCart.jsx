import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCart.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <div>
      <Link to="/mi-carrito">
        <div className="cart-itemsCounter">
          <span>{getTotalQuantity()}</span>
        </div>
        <span className="header__icon">
          <i className="fa-solid fa-cart-shopping" title="Ver tu carrito"></i>
        </span>
      </Link>
    </div>
  );
};

export default ShoppingCart;