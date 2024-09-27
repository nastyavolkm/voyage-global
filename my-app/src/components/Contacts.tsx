import React from 'react';
import './Contacts.scss';
import { contacts } from "../configs/contacts";

export function Contacts() {
    return (
        <div className='contacts'>
            {contacts.map((contact) => <a
                key={contact.id}
                href={`${contact.id !== 'address' ?  contact.action+contact.value : contact.action}`}
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
        </div>
    )
}
