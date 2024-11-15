import React, { useState } from 'react';
import './Carousel.scss';

interface ImageProps {
    images: string[];
}

export function Carousel({ images }: ImageProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className='carousel'>
            <button
                onClick={prevSlide}
                className='carousel__btn carousel__btn--prev'
            >
                &lt;
            </button>
            <div className='carousel__inner'>
                <div
                    className='carousel__inner-img'
                    style={{ backgroundImage: `url(${require(`../assets/office/${images[activeIndex]}`)})` }}
                />
            </div>
            <button
                onClick={nextSlide}
                className='carousel__btn carousel__btn--next'
            >
                &gt;
            </button>
        </div>
    );
}
