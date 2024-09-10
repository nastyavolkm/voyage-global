import React from 'react';
import './Contacts.scss';
import { contacts } from "../configs/contacts";
import map from '../assets/phone.png';
import { address } from "../configs/address";

export function Contacts() {
    return (
        <div className='contacts'>
            <div className='contacts__block'>
                <p className='contacts__block-title'>Связаться с нами</p>
                <div>
                    {contacts.map((contact) => <div
                        key={contact.id}
                        className='contacts__item'
                    >
                        <img
                            className='contacts__item-img'
                            src={require(`../assets/${contact.icon}.png`)}
                            alt={contact.id}
                        />
                        {contact.value}
                    </div>)}
                </div>
            </div>
            <div className='contacts__block'>
                <p className='contacts__block-title'>Наш офис</p>
                <div className='contacts__item'>
                    <img
                        className='contacts__item-img'
                        src={map}
                        alt='офис'
                    />
                    <span>{address}</span>
                </div>
            </div>
        </div>
    )
}
