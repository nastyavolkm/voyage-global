import React from 'react';
import { Carousel } from "../components/Carousel";
import { feedbacks } from "../configs/feedbacks";
import './FeedbackPage.scss';

export function FeedbacksPage() {
    return (
        <div className='feedback'>
            <Carousel feedbacks={feedbacks}/>
        </div>
    )
}
