import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navigation.scss';

export function Navigation() {
    return (
        <nav className='navigation'>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/'>Подбор тура</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/main'>Главная</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/about'>О нас</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/news'>Новости</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/feedback'>Отзывы</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/contacts'>Контакты</NavLink>
        </nav>
    )
}
