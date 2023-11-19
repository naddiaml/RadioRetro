import { useState, useEffect } from "react";
import "./ItemsListContainer.css";
import data from '../../data/products.json';
import AddToCartButton from "../AddToCartButton/AddToCartButton";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ItemsListContainer = ({ sectionTitle, enableLoadMore, buttonLoadMode, linkTo }) => {

    const sowInitialQuantity = 6;
    const loadQuantity = 6;

    const [showQuantity, setShowQuantity] = useState(sowInitialQuantity);

    const [product, setProducts] = useState([]);
    const category = useParams().category;

    const [title, setTitle] = useState('Nuestros productos');

    const productRequest = () => {
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    }

    useEffect(() => {
        productRequest()
            .then((res) => {
                if (category) {
                    setProducts(res.filter((prod) => prod.category === category));
                    setTitle(category);
                } else {
                    setProducts(res);
                }
            })
    }, [category]);

    const handleClick = () => {
        if (enableLoadMore && showQuantity < product.length) {
            setShowQuantity(prev => prev + loadQuantity);
        }
    };

    return (
        <div className="container-80">
            <section id="products-section">
                <h2 className="secton-title" style={{ textTransform: 'uppercase' }}>{sectionTitle} · Radios {title}</h2>
                <article> Además de reparar radios antiguas, contamos con nuestro propio catálogo de <b>radios reacondicionadas</b> listas para disfrutar! 📻</article>
                <div className="products-container">
                    {
                        product.length > 0 &&
                        product.slice(0, showQuantity).map((product) => {
                            const isInStock = product.stock > 0;
                            return (
                                <div className={`product-card ${isInStock ? "in-stock" : "out-of-stock"}`} title={product.name}>
                                    <div className="product-card__img-container">
                                        <img src={product.image} alt={product.name} title={product.name} className="product-card__image" />
                                        {isInStock ? null : (
                                            <div className="out-of-stock-overlay">
                                                SIN STOCK
                                            </div>
                                        )}
                                    </div>
                                    <span className="product-card__name"><b>{product.name.length > 23 ? `${product.name.slice(0, 20)}...` : product.name}</b></span>
                                    <span className="product-card__price">
                                        <span className="d-sign">$</span>
                                        <b>{product.price}</b>
                                    </span>
                                    <AddToCartButton stock={`${product.stock}`} />
                                    <span className='product-card__details' title="Ver más detalles de este product 👀">
                                        <Link to={`/products/${product.id}`}>
                                            MÁS DETALLES
                                            <span className="material-icons chevron">
                                                chevron_right
                                            </span>
                                        </Link>
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="load-more__container">
                    <Link to={linkTo}>
                        <button className={`load-more ${enableLoadMore && showQuantity >= product.length ? 'no-more-elements' : ''} ${enableLoadMore ? "enabled" : "disabled"}`} onClick={handleClick}>
                            {buttonLoadMode}
                        </button>
                    </Link>

                </div>
            </section >
        </div >
    )
}

export default ItemsListContainer