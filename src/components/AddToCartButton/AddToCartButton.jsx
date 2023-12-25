import React, { useContext } from 'react';
import './AddToCartButton.css';
import { CartContext } from '../../context/CartContext';

const AddToCartButton = ({ stock, handleAddToCart }) => {
    const { addToCart } = useContext(CartContext);
    const isInStock = stock > 0;

    const handleClick = () => {
        handleAddToCart();
        addToCart();
    };

    return (
        <div className={`product-cta__container ${isInStock ? 'enable-addToCart' : 'disable-addToCart'}`}>
            <button className="product-cta" title="Agrega este producto a tu carrito" onClick={handleClick}>
                <span className="material-icons">shopping_cart</span>
                <span className="add-to-cart">AGREGAR AL CARRITO</span>
            </button>
        </div>
    );
};

export default AddToCartButton