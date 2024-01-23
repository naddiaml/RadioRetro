import React from 'react';
import Hero from '../Hero/Hero.jsx';
import ItemsListContainer from '../ItemsListContainer/ItemsListContainer.jsx';
import BestSellers from '../BestSellers/BestSellers.jsx';
import CarouselSection from '../CarouselSection/CarouselSection.jsx';

const Home = () => {
    return (
        <div>
            <Hero />
            <BestSellers />
            <CarouselSection />
            <ItemsListContainer sectionTitle={"Nuestros productos"} buttonLoadMode={"Ver todos los productos"} enableLoadMore={false} linkTo={"/tienda"} />
        </div>
    )
}

export default Home