import React from 'react';
import './Contacts.scss';
import { contacts } from "../configs/contacts";
import map from '../assets/location.svg';
import { address } from "../configs/address";

export function Contacts() {
    return (
        <div className='contacts'>
            {contacts.map((contact) => <a
                key={contact.id}
                href={`${contact.action}${contact.value}`}
                target='_blank'
                className='contacts__item'
            >
                <img
                    className='contacts__item-img'
                    src={require(`../assets/${contact.icon}`)}
                    alt={contact.id}
                />
                {contact.value}
            </a>)}
            <div className='contacts__item address'>
                <img
                    className='contacts__item-img'
                    src={map}
                    alt='офис'
                />
                <span>{address}</span>
            </div>
        </div>
    )
}
