import React from 'react';
import './About.scss';
import { managers } from "../configs/managers";
import { officeImages } from '../configs/officeImages';
import { Carousel } from "./Carousel";
import { ImageComponent } from "./ImageModal";

export function About() {
    return (
        <div className='about'>
            <div className='about__wrapper'>
                <Carousel images={officeImages}/>
                <div className='about__text'>
                    <p className='about__text bold'>Воплощать мечты в реальность - наша работа.</p>
                    <p>
                        Компания ВояжГлобал -- это команда профессионалов своего дела с богатым опытом личных
                        путешествий и рабочих поездок. </p>
                    <p>
                        Мы искренне считаем, что наша работа приносит счастье людям, ведь ничто так не заряжает, как
                        путешествия, новые места и люди.</p>
                    <p>Поэтому так важно предлагать качественный продукт,
                        который подходит под ваши индивидуальные критерии отдыха.</p>
                    <ul className='about__text-list'><b>Туристические услуги, которые мы оказываем:</b>
                        <li className='about__text-list-item service'>пляжный отдых;</li>
                        <li className='about__text-list-item service'>экскурсионные туры;</li>
                        <li className='about__text-list-item service'>комбинированные туры;</li>
                        <li className='about__text-list-item service'>корпоративный туризм;</li>
                        <li className='about__text-list-item service'>зимние горнолыжные туры;</li>
                        <li className='about__text-list-item service'>круизы;</li>
                        <li className='about__text-list-item service'>бронирование гостиниц, авиабилетов.</li>
                    </ul>
                    <ul><b>
                        <li className='about__text-list-item pro'>Мы всегда на связи.</li>
                        <li className='about__text-list-item pro'>Мы всегда предлагаем только лучшее в конкретно вашем случае.</li>
                        <li className='about__text-list-item pro'>Мы всегда готовы с холодной головой решать все нестандартные ситуации.</li>
                    </b>
                    </ul>
                    <p><b>✨Мечтай. Исследуй. Открывай.</b></p>
                    <p className='about__text right'><i>Всегда ваш, ВояжГлобал</i></p>
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
                <div className='about__managers-item-wrapper'>
                    <p className='about__managers-item-wrapper-bold'>{manager.id}</p>
                    <span dangerouslySetInnerHTML={{ __html: manager.text }}></span>
                    <div className='about__managers-item-contacts'>
                        {manager.contacts.map((contact) => <a
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
                        )}</div>
                </div>
            </div>)}
            </div>
            <div className='about__documents'>
                <ImageComponent
                    src={require('../assets/svid.jpg')}
                    small={{ width: '200px', height: 'auto' }}
                    big={{ width: '400px', height: 'auto' }}
                />
                <ImageComponent
                    src={require('../assets/des.jpg')}
                    small={{ width: '200px', height: 'auto' }}
                    big={{ width: '400px', height: 'auto' }}
                />
                <ImageComponent
                    src={require('../assets/rata.jpg')}
                    small={{ width: 'auto', height: '200px' }}
                    big={{ width: 'auto', height: '400px' }}
                />
            </div>
        </div>
    )
}
