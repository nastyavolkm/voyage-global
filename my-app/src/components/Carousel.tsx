import React, { useState } from 'react';
import './Carousel.scss';
import { IFeedback } from "../models/feedback.model";

interface FeedbackProps {
    feedbacks: IFeedback[];
}

export function Carousel({ feedbacks }: FeedbackProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
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
                <div className='carousel__inner-text'>
                    <p className='carousel__inner-text-name'>{feedbacks[activeIndex].author}</p>
                    <p>{feedbacks[activeIndex].date}</p>
                </div>
                <img
                    className='carousel__inner-img'
                    src={require(`../assets/feedbacks/${feedbacks[activeIndex].feedback}`)}
                    alt='отзыв'
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
