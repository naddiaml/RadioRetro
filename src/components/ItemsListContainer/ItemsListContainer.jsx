import React, { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemsListContainer = ({ enableLoadMore, buttonLoadMode, linkTo }) => {
    const sowInitialQuantity = 6;
    const loadQuantity = 6;

    const [showQuantity, setShowQuantity] = useState(sowInitialQuantity);
    const [products, setProducts] = useState([]);
    const category = useParams().category;
    const [title, setTitle] = useState('Nuestros productos');

    const fetchProducts = async () => {
        try {
            const productsCollection = collection(db, 'products');
            const q = category
                ? query(productsCollection, where('category', '==', category))
                : productsCollection;

            const querySnapshot = await getDocs(q);
            const productsData = [];

            querySnapshot.forEach((doc) => {
                productsData.push({ ...doc.data(), id: doc.id });
            });

            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching products: ', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [category]);

    useEffect(() => {
        if (category) {
            setTitle(`Nuestros Productos · Radios ${category}`);
        } else {
            setTitle('Nuestros Productos');
        }
    }, [category]);

    const handleClick = () => {
        if (enableLoadMore && showQuantity < products.length) {
            setShowQuantity((prev) => prev + loadQuantity);
        }
    };

    return (
        <div className="container-80">
            <section id="products-section">
                <h2 className="secton-title" style={{ textTransform: 'uppercase' }}>{title}</h2>
                <article> Además de reparar radios antiguas, contamos con nuestro propio catálogo de <b>radios reacondicionadas</b> listas para disfrutar! 📻</article>
                <div className="products-container">
                    {products.length > 0 &&
                        products.slice(0, showQuantity).map((product) => {
                            const isInStock = product.stock > 0;
                            return (
                                <div className={`product-card ${isInStock ? "in-stock" : "out-of-stock"}`} title={product.name} key={product.id}>
                                    <div className="product-card__img-container">
                                        <img src={product.image} alt={product.name} title={product.name} className="product-card__image" />
                                        {isInStock ? null : (
                                            <div className="out-of-stock-overlay">
                                                SIN STOCK
                                            </div>
                                        )}
                                    </div>
                                    <span className="product-card__name">
                                        <b>{product.name.length > 23 ? product.name.slice(0, 25) + '...' : product.name}</b>
                                    </span>
                                    <span className="product-card__price">
                                        <span className="d-sign">$</span>
                                        <b>{product.price}</b>
                                    </span>
                                    <ItemCount item={product} stock={product.stock} />
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
                        })}
                </div>
                <div className="load-more__container">
                    <Link to={linkTo}>
                        <button
                            className={`load-more ${enableLoadMore && showQuantity >= products.length ? 'no-more-elements' : ''} ${enableLoadMore ? "enabled" : "disabled"}`}
                            onClick={handleClick}
                        >
                            {buttonLoadMode}
                        </button>
                    </Link>
                </div>
            </section >
        </div >
    );
};

export default ItemsListContainer;