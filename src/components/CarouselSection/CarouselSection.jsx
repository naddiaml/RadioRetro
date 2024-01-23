import React from 'react';
import './CarouselSection.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselItem from '../CarouselItem/CarouselItem';

const CarouselSection = () => {
    const carouselItems = [
        <CarouselItem key={1} ItemClassName="fa-solid fa-truck" ItemTitle="Envíos a todo el país" ItemText="Rápidos y seguros" />,
        <CarouselItem key={2} ItemClassName="fa-brands fa-whatsapp" ItemTitle="Soporte online" ItemText="Podés contactarnos por WhatsApp ante cualquier duda que tengas!" />,
        <CarouselItem key={3} ItemClassName="fa-solid fa-shield-halved" ItemTitle="Plataforma segura" ItemText="Pagá y cotizá con tranquilidad" />,
    ];

    const owlOptions = {
        items: 1,
        loop: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 3500
            },
            1100: { items: 3 }
        }
    };

    return (
        <div className="carousel-container">
            {/* Owl Carousel */}
            <OwlCarousel className="owl-theme" {...owlOptions}>
                {carouselItems}
            </OwlCarousel>

        </div>
    );
};

export default CarouselSection;