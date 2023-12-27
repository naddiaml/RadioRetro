import React from "react";
import './ProductCard.css';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ProductCard = ({ product }) => {
    const isInStock = product.stock > 0;

    return (
        <div className={`product-card ${isInStock ? "in-stock" : "out-of-stock"}`} title={product.name}>
            <div className="product-card__img-container">
                <div className="product-card__image-overlay">
                    {!isInStock && (
                        <div className="out-of-stock-overlay">
                            SIN STOCK
                        </div>
                    )}
                    <img src={product.image} alt={product.name} title={product.name} className="product-card__image" />
                </div>
            </div>
            {!isInStock && (
                <>
                    <span className="product-card__name">
                        <b>{product.name.length > 23 ? product.name.slice(0, 25) + '...' : product.name}</b>
                    </span>
                    <span className="product-card__price">
                        <span className="d-sign">$</span>
                        <b>{product.price}</b>
                    </span>
                </>
            )}
            {isInStock && (
                <>
                    <span className="product-card__name">
                        <b>{product.name.length > 23 ? product.name.slice(0, 25) + '...' : product.name}</b>
                    </span>
                    <span className="product-card__price">
                        <span className="d-sign">$</span>
                        <b>{product.price}</b>
                    </span>
                    <ItemCount item={product} stock={product.stock} />
                </>
            )}
            <span className='product-card__details' title="Ver más detalles de este producto 👀">
                <Link to={`/products/${product.id}`}>
                    MÁS DETALLES
                    <span className="material-icons chevron">
                        chevron_right
                    </span>
                </Link>
            </span>
        </div>
    );
};

export default ProductCard;