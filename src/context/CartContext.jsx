import React, { createContext, useState, useRef, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const cartRef = useRef([]);
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const existingItemIndex = cart.findIndex((product) => product.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            const newItem = { id: item.id, name: item.name, image: item.image, price: item.price, quantity };
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cartRef, cart, addToCart, removeFromCart, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};