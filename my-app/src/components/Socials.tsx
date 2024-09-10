import React from 'react';
import './Socials.scss';
import { socials } from "../configs/contacts";

export function Socials() {
    return (
        <div className='socials'>
            {socials.map((item) => <a
                href={item.value}
                target='_blank'
                title={item.value}
                key={item.id}
                className='socials__item'
            >
                <img
                    className='socials__item-img'
                    src={require(`../assets/${item.icon}`)}
                    alt={item.id}
                />
            </a>)}
        </div>
    )
}
