import React, { useState, useContext, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ item, stock, onStockChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [isInStock, setIsInStock] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantityRef = useRef(0);

  useEffect(() => {
    totalQuantityRef.current = getTotalQuantity();
  }, [getTotalQuantity]);

  const increment = () => {
    const maxIncrement = stock - totalQuantityRef.current;
    maxIncrement > 0 && setQuantity((prevQuantity) => Math.min(prevQuantity + 1, maxIncrement));
  };

  const decrement = () => {
    quantity > 1 && setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const handleAddToCart = () => {
    const availableQuantity = Math.min(stock - totalQuantityRef.current, quantity);

    if (availableQuantity > 0) {
      addToCart(item, availableQuantity);

      totalQuantityRef.current += availableQuantity;
      setIsInStock(stock - totalQuantityRef.current > 0);

      setQuantity(1);

      // Notificar al componente padre sobre el cambio de stock
      onStockChange && onStockChange({ id: item.id, stock: stock - availableQuantity });
    }
  };

  return (
    <div className="counter">
      {isInStock ? (
        <div>
          <div className="controls">
            <button className="button" onClick={decrement}>
              -
            </button>
            <h4 className="number">{quantity}</h4>
            <button className="button" onClick={increment}>
              +
            </button>
          </div>
          <AddToCartButton
            stock={stock}
            handleAddToCart={handleAddToCart}
          />
        </div>
      ) : (
        <div className="itemOut-of-stock">
          <span className="material-icons">
            error_outline
          </span>
          <p>No hay más stock de este producto.</p>
        </div>
      )}
    </div>
  );
};

ItemCount.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  stock: PropTypes.number.isRequired,
  onStockChange: PropTypes.func,
};

export default ItemCount;