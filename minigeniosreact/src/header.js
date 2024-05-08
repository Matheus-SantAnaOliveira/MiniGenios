import React, { useState } from 'react';
import './header.css';
import './index.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEnvelopeFlapped, setIsEnvelopeFlapped] = useState(false);
    const [isFullImgOpen, setIsFullImgOpen] = useState(false);
    const [fullImgSrc, setFullImgSrc] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleEnvelopeFlap = () => {
        setIsEnvelopeFlapped(!isEnvelopeFlapped);
    }

    const openFullImg = (pic) => {
        setFullImgSrc(pic);
        setIsFullImgOpen(true);
    }

    const closeFullImg = () => {
        setIsFullImgOpen(false);
    }

    return (
        <header className="header">
            <nav className="nav container">
                <div className="nav__data">
                    <a href="/" className="nav__logo">
                        <i className="bi bi-spellcheck"></i>
                        <div className="minigenios">Mini<span className="genios">Gênios</span></div>
                    </a>
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="ri-menu-line nav__burger"></i>
                        <i className="ri-close-line nav__close"></i>
                    </div>
                </div>
                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li><a href="/" className="nav__link">Pagina Inicial</a></li>
                        <li><a href="/questions" className="nav__link">Perguntas </a></li>
                        <li><a href="/videos" className="nav__link">Videos</a></li>
                        <li><a href="/specific-video" className="nav__link">Video Específico</a></li>            
                    </ul>
                </div>
            </nav>
            <div className={`envelope-wrapper ${isEnvelopeFlapped ? 'flap' : ''}`} onClick={toggleEnvelopeFlap}>
                {/* Conteúdo do envelope aqui */}
            </div>
            {isFullImgOpen && (
                <div className="full-img-container" onClick={closeFullImg}>
                    <img src={fullImgSrc} alt="Full Image" className="full-img" />
                </div>
            )}
        </header>
    );
}

export default Header;
