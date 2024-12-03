import React from 'react';
import { news } from "../configs/news";
import './NewsPage.scss';
import { ImageComponent } from "../components/ImageModal";

export function NewsPage() {
    return (
        <div className='news'>
            {news.map((item) => <div
                key={item.title}
                className='news__item'
            >
                <div className='news__item-wrapper'>
                    <p className='news__item-title'>{item.title}</p>
                    <span
                        className='news__item-text'
                        dangerouslySetInnerHTML={{ __html: item.text }}
                    ></span>
                </div>
                <div className='news__item-img-wrapper'>{item.img.map((src, index) => <ImageComponent
                        key={index}
                        src={require(`../assets/news/${src}`)}
                        small={{ width: '250px', height: 'auto' }}
                        big={{ width: 'auto', height: '90vh' }}
                    />
                )}</div>
            </div>)}
        </div>
    )
}
