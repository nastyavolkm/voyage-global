import React from 'react';
import logo from '../assets/Voyage_Global_svg_free2-01.png';
import './Header.scss';
import { Contacts } from "./Contacts";
import { Socials } from "./Socials";
import { Navigation } from "./Navigation";

export function Header() {
    return (
        <div className='header'>
            <div className='header__wrapper'>
                <Contacts/>
                <Socials/></div>
            <div className='header__wrapper with-bg'>
                <img
                    className='header__logo'
                    src={logo}
                    alt='Logo'
                />
                <Navigation/>
            </div>
        </div>
    )
}
