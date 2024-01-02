import React, { useState, useEffect } from "react";
import './BestSellers.css';
import ProductCard from "../ProductCard/ProductCard.jsx";
import { fetchProductsFromFirebase } from "../../helpers/firebaseHelper.js";

const BestSellers = () => {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                // Utiliza el helper para obtener los productos
                const bestSellersData = await fetchProductsFromFirebase();

                // Ordena los productos por la tasa en orden descendente y limita a 2
                const sortedBestSellers = bestSellersData
                    .sort((a, b) => b.rate - a.rate)
                    .slice(0, 2);

                setBestSellers(sortedBestSellers);
            } catch (error) {
                console.error('Error fetching best sellers: ', error);
            }
        };

        fetchBestSellers();
    }, []);

    return (
        <div className="best-sellers__container">
            <div className="best-sellers__text-container">
                <span>LOS MODELOS</span>
                <h2>MÁS BUSCADOS</h2>
            </div>
            <div className="best-sellers__items-container">
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default BestSellers;