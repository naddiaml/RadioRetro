import '../AddToCartButton/AddToCartButton.css';

const AddToCartButton = ({ stock, handleAddToCart }) => {

    const isInStock = stock > 0;
    return (
        <div className={`product-cta__container ${isInStock ? "enable-addToCart" : "disable-addToCart"}`}>
            <button className="product-cta" title="Agrega este producto a tu carrito" onClick={handleAddToCart}>
                <span className="material-icons">add_circle</span>
                <span className="add-to-cart">AGREGAR AL CARRITO</span>
            </button>
        </div>
    )
}

export default AddToCartButton