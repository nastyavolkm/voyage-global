import React from 'react';
import logo from '../assets/Voyage_Global_svg_free1-01.png';
import './Header.scss';
import { Contacts } from "./Contacts";
import { Socials } from "./Socials";
import { Navigation } from "./Navigation";

export function Header() {
    return (
        <div className='header'>
            <div className='header__wrapper'>
                <img
                    className='header__logo'
                    src={logo}
                    alt='Logo'
                />
                <Contacts/>
                <Socials/>
            </div>
            <Navigation/>
        </div>
    )
}
