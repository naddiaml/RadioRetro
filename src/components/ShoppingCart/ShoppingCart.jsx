import "./ShoppingCart.css";

let counter = 1;

const ShoppingCart = () => {
    return (
            <div>
                <div className="cart-itemsCounter">
                <span>{counter}</span>
            </div>
        <span className="material-icons header__icons" title="Ver tu carrito">
            shopping_cart
        </span>
            </div>
    )
}

export default ShoppingCart