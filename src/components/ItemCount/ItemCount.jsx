import { useState } from "react";
import "./ItemCount.css"
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ItemCount = ({ item, stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        quantity < stock && setQuantity(quantity + 1);
    };

    const decrement = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {
        const adjustedQuantity = quantity < 1 ? 1 : quantity;
        console.log({ item: { ...item }, quantity: adjustedQuantity });
    };

    return (
        <div>
            <div className="counter">
                <div className="controls">
                    <button className="button" onClick={decrement}>
                        -
                    </button>
                    <h4 className="number">{quantity}</h4>
                    <button className="button" onClick={increment}>
                        +
                    </button>
                </div>
            </div>
            <AddToCartButton
                stock={`${stock}`}
                onClick={() => onAdd(quantity)}
                handleAddToCart={handleAddToCart}
            />
        </div>
    );
};

export default ItemCount;