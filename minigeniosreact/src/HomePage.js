import React from 'react';
import './'
const Homepage = () => {
    return (
        <div className="content">
            <header className="header">
                <nav className="nav container">
                    <div className="nav__data">
                        <a href="/" className="nav__logo">
                            <i className="bi bi-spellcheck"></i>
                            <div className="minigenios">Mini<span className="genios">Gênios</span></div>
                        </a>
                        <div className="nav__toggle" id="nav-toggle">
                            <i className="ri-menu-line nav__burger"></i>
                            <i className="ri-close-line nav__close"></i>
                        </div>
                    </div>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li><a href="/" className="nav__link">Pagina Inicial</a></li>
                            <li><a href="/questions" className="nav__link">Perguntas</a></li>
                            <li><a href="/videos" className="nav__link">Videos</a></li>
                            <li><a href="/specific-video" className="nav__link">Video Específico</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container-h1">
                <h1>
                    Tire Suas dúvidas com o Gênio
                </h1>
                <div className="main-container">
                    {/* Conteúdo adicional da página inicial */}
                </div>
                <textarea></textarea>
            </div>
        </div>
    );
}

export default Homepage;
