import React, { useContext } from 'react';
import './AddToCartButton.css';
import CtaButton from '../CtaButton/CtaButton';

import { CartContext } from '../../context/CartContext';

const AddToCartButton = ({ stock, handleAddToCart }) => {
    const { addToCart } = useContext(CartContext);
    const isInStock = stock > 0;

    const handleClick = () => {
        handleAddToCart();
        addToCart();
    };

    return (
        <div className={`product-cta__container ${isInStock ? 'enable-addToCart' : 'disable-addToCart'}`} onClick={handleClick}>
            <CtaButton buttonTitle={'Agregar este producto a tu carrito'} iconClassName={"fa-solid fa-cart-plus"} buttonText='Agregar al carrito' />
        </div>
    );
};

export default AddToCartButton