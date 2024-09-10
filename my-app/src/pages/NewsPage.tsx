import React from 'react';
import { news } from "../configs/news";
import './NewsPage.scss';

export function NewsPage() {
    return (
        <div className='news__wrapper'>
            <div className='news'>
                {news.map((item) => <div
                    key={item.title}
                    className='news__item'
                >
                    <img
                        className='news__item-img'
                        src={require(`../assets/${item.img}`)}
                        alt={item.title}
                    />
                    <div className='news__item-wrapper'>
                        <p className='news__item-title'>{item.title}</p>
                        <span className='news__item-text'>{item.text}</span>
                    </div>
                    <p className='news__item-date'>{item.date}</p>
                </div>)}
            </div>
        </div>
    )
}
