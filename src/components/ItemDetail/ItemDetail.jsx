import React, { useState, useEffect } from "react";
import './ItemDetail.css';
import Rate from "../Rate/Rate.jsx";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchProductByIdFromFirebase } from "../../helpers/firebaseHelper.js";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { category } = item;

  useEffect(() => {
    const fetchItemById = async () => {
      try {
        const product = await fetchProductByIdFromFirebase(id);
        if (product) {
          setItem(product);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchItemById();
  }, [id]);

  const isInStock = item.stock !== undefined && item.stock > 0;
  return (
    <div className="container">
      <div className="item-detail__navigation">
        <span>
          <Link to={"/"}>
            Inicio<span className="chevron">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
        </span>
        <span>
          <Link to={"/tienda"}>
            Tienda<span className="chevron">
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </Link>
        </span>
        {category && (
          <span>
            <Link to={`/tienda/${category.toLowerCase()}`}>
              {category.charAt(0).toUpperCase() + category.substring(1)}
              <span className="chevron">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </Link>
          </span>
        )}
        <span>
          <Link to={category ? `/tienda/${category.toLowerCase()}/${item.id}` : "/tienda"} className="current-item">
            {item.name}
          </Link>
        </span>
      </div>
      <div className="item-detail__navigation-mobile">
        <span>
          <Link to={"/tienda"}>
            <span className="chevron">
              <i className="fa-solid fa-chevron-left"></i>
            </span>Volver a la tienda
          </Link>
        </span>
      </div>
      <div className="item-detail">
        <div className="item-detail__product-image__container">
          <img src={item.image} alt={item.name} className="product__image" />
        </div>
        <div className="item-detail__product-details__container">
          <span className="item-detail__product-name">{item.name}</span>
          <span className="item-detail__product-price">$ {item.price}</span>
          <div className="item-detail__product-description__container">
            <p className="item-detail__product-description">{item.description}</p>
          </div>
          <div className="item-detail__product-rate-container">
            <span><b>Calificación:</b> </span>
            <Rate rating={item.rate} maxRating={5} />
          </div>
          <div className="addToCart__items-container">
            {isInStock ? (
              <div className="itemIn-stock">
                <ItemCount item={item} stock={Number(`${item.stock}`)} />
              </div>
            ) : (
              <div className="itemOut-of-stock">
                <i className="fa-solid fa-circle-exclamation"></i>
                <p>Por el momento, este producto <b>no está disponible</b>.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;