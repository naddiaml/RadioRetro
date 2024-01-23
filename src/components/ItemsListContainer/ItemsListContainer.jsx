import React, { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchProductsFromFirebase } from "../../helpers/firebaseHelper.js";


const ItemsListContainer = ({ enableLoadMore, buttonLoadMode, linkTo }) => {
    const sowInitialQuantity = 6;
    const loadQuantity = 6;

    const [showQuantity, setShowQuantity] = useState(sowInitialQuantity);
    const [title, setTitle] = useState('Nuestros productos');

    const category = useParams().category;
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const productsData = await fetchProductsFromFirebase(category);
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
                        products.slice(0, showQuantity).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
                <div className="load-more__container">
                    <Link to={linkTo} className={`load-more ${enableLoadMore && showQuantity >= products.length ? 'no-more-elements' : ''} ${enableLoadMore ? "enabled" : "disabled"}`}
                        onClick={handleClick}>{buttonLoadMode}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ItemsListContainer;