import React from 'react';
import { Socials } from "./Socials";
import './Footer.scss';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                OOO "Вояж Глобал" УНП 192567413
            </div>
            <Socials/>
        </footer>
    )
}
