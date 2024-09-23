import React from 'react';
import './About.scss';
import { ceo, managers } from "../configs/managers";
import office from '../assets/office-about.jpg';

export function About() {
    return (
        <div className='about'>
            <div className='about__wrapper'>
                <img
                    className='about__img'
                    src={office}
                    alt='офис'
                />
                <div className='about__text'>
                    <p>Наша компания Вояж Глобал предоставляет широкий спектр туристических услуг. Мы поможем вам
                        подобрать тур,
                        который подойдет именно вам. Мы работаем с лучшими туроператорами и гарантируем вам качество
                        услуг.</p>
                    <p>Мы предлагаем туры на любой вкус и кошелек. У нас вы можете приобрести как готовые туры, так и
                        заказать индивидуальный тур. Мы всегда готовы помочь вам с выбором и ответить на все ваши
                        вопросы.</p>
                    <p>Мы ждем вас в нашем офисе. Приходите к нам и мы поможем вам с выбором тура. Мы гарантируем вам
                        отличный сервис и низкие цены.</p>
                </div>
            </div>
            <div className='about__ceo'>
                <div className='about__ceo-wrapper'>
                    <div
                        className='about__ceo-img'
                        style={{ backgroundImage: `url(${require(`../assets/${ceo.avatar}`)})` }}
                    />
                    <span>{ceo.text}</span>
                </div>
                <div className='about__ceo-contacts'>Связаться со мной: {ceo.contacts.map((contact) => <a
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
                    </a>
                )}
                </div>
            </div>
            <div className='about__managers'>{managers.map((manager) => <div
                key={manager.id}
                className='about__managers-item'
            >
                <div
                    style={{ backgroundImage: `url(${require(`../assets/${manager.avatar}`)})` }}
                    className='about__managers-item-img'
                />
                {manager.id}
                <span>{manager.text}</span>
                <div className='about__managers-item-contacts'>{manager.contacts.map((contact) => <a
                        key={contact.id}
                        href={`${contact.action}${contact.value}`}
                        target='_blank'
                        className='about__managers-item-contacts-item'
                    >
                        <img
                            className='contacts__item-img'
                            src={require(`../assets/${contact.icon}`)}
                            alt={contact.id}
                        />
                        {contact.value}
                    </a>
                )}</div>
            </div>)}
            </div>
        </div>
    )
}
