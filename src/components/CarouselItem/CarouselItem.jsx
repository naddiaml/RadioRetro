import React from 'react';
import './CarouselItem.css';

const CarouselItem = ({ ItemClassName, ItemTitle, ItemText }) => {

    return (
        <div className='carousel-item'>
            <span className="carousel-item__icon">
                <i className={ItemClassName}></i>
            </span>
            <div className="carousel-item__text-container">
                <span className="carousel-item__text">
                    {ItemTitle}
                </span>
                <span className="carousel-item__text">
                    {ItemText}
                </span>
            </div>

        </div>
    );
};

export default CarouselItem;