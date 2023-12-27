import React, { useState, useEffect } from "react";
import './BestSellers.css';
import ProductCard from "../ProductCard/ProductCard.jsx";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

const BestSellers = () => {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const productsCollection = collection(db, 'products');
                const q = query(productsCollection, orderBy('rate', 'desc'), limit(2));

                const querySnapshot = await getDocs(q);
                const bestSellersData = [];

                querySnapshot.forEach((doc) => {
                    bestSellersData.push({ ...doc.data(), id: doc.id });
                });

                setBestSellers(bestSellersData);
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