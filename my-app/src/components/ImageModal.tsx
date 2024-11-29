import React, { useState } from 'react';

interface ImageProps {
    src: string;
    small: {
        width: string,
        height: string,
    },
    big: {
        width: string,
        height: string,
    },
}

export function ImageComponent({ src, small, big }: ImageProps) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(src);

    const openModal = (imgSrc: string): void => {
        setCurrentSrc(imgSrc);
        setModalIsOpen(true);
    };

    const closeModal = (): void => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <img
                className='image small'
                style={{ width: small.width, height: small.height, cursor: 'pointer' }}
                src={currentSrc}
                onClick={() => openModal(currentSrc)}
                alt='no image'
            />
            {modalIsOpen && (
                <dialog
                    className='dialog'
                    style={{ position: "fixed", top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)' }}
                    open
                    onClick={() => closeModal()}
                >
                    <img
                        className='image big'
                        style={{ width: big.width, height: big.height, cursor: 'pointer' }}
                        src={currentSrc}
                        onClick={() => closeModal()}
                        alt='no image'
                    />
                </dialog>
            )}
        </div>
    );
}
