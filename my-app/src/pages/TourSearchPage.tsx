import React from 'react';
import stub from '../assets/tour-search.png';
import './TourSearchPage.scss';

export function TourSearchPage() {
    return (
        <div className='search'>
            <img
                className='search__img'
                src={stub}
                alt='search'
            />
        </div>
    )
}
