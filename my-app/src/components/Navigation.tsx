import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.scss';

export function Navigation() {
    return (
        <nav className='navigation'>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/'>Подбор тура</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/tours'>Наши туры</NavLink>
            {/*<NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/cruises'>Подбор круиза</NavLink>*/}
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/about'>О нас</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/news'>Новости</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/feedback'>Отзывы</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/pay'>Варианты оплаты</NavLink>
            <NavLink className={({isActive}) => isActive ? 'navigation__item active' : 'navigation__item'} to='/contacts'>Контакты</NavLink>
        </nav>
    )
}
