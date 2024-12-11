import React from 'react';
import { Socials } from "./Socials";
import './Footer.scss';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__container'>
                    Oбщество с ограниченной ответственностью "Вояж Глобал" УНП 192567413
                    <div className='footer__container-info'>
                        <p>Республика Беларусь, г.Минск, ул.В.Хоружей,3</p>
                        <p>Время работы: пн-вскр 09:00 - 19:00</p>
                    </div>
                </div>
                <Socials/>
            </div>
            <div className='footer__wrapper text'>© 2024, Вояж Глобал</div>
        </footer>
    )
}
