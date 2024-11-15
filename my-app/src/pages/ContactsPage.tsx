import React from 'react';
import './ContactsPage.scss';
import { Contacts } from "../components/Contacts";

export function ContactsPage() {
    return (
        <div className='contacts-page'>
            <div className='contacts-page__contacts'>
                <p className='contacts-page__heading'>ООО "ВояжГлобал"</p><Contacts/></div>
            <div className='contacts-page__text'>
                <p>Режим работы: 09:00 - 19:00</p>
                <p>Как нас найти:</p>
            </div>
            <div className='contacts-page__map'>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href='https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps'
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                    >Минск
                    </a>
                    <a
                        href='https://yandex.by/maps/157/minsk/house/Zk4YcwBpSE0AQFtpfXVwdn1iYA==/?ll=27.579187%2C53.917114&utm_medium=mapframe&utm_source=maps&z=16.17'
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                    >Улица Веры Хоружей, 3 — Яндекс Карты
                    </a>
                    <iframe
                        src='https://yandex.by/map-widget/v1/?ll=27.579187%2C53.917114&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjY3ODE0MBJF0JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0LLRg9C70ZbRhtCwINCS0LXRgNGLINCl0LDRgNGD0LbQsNC5LCAzIgoNLqLcQRUfq1dC&z=16.17'
                        width='100%'
                        height='300px'
                        frameBorder='1'
                        allowFullScreen={true}
                        style={{ position: 'relative' }}
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
