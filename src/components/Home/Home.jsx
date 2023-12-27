import React from 'react';
import Hero from '../Hero/Hero.jsx';
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer.jsx';
import BestSellers from '../BestSellers/BestSellers.jsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <BestSellers />
            <ItemsListContainer sectionTitle={"Nuestros productos"} buttonLoadMode={"Ver todos los productos"} enableLoadMore={false} linkTo={"/store"} />
        </div>
    )
}

export default Home