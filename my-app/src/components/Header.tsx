import React from 'react';
import logo from '../assets/Voyage_Global_svg_free1-01.png';
import './Header.scss';
import { Contacts } from "./Contacts";
import { Socials } from "./Socials";

export function Header() {
    return (
        <div className='header'>
            <img
                className='header__logo'
                src={logo}
                alt='Logo'
            />
            <Contacts/>
            <Socials/>
        </div>
    )
}
