import React from 'react';
import '/assets/css/styles.css';
import '/assets/css/videos.css';
import '/assets/css/header.css';
const Videos = () => {
    return (
        <div className="main-content">
            <div className="quest">
                <h1>Videos</h1>
            </div>
            <div className="pergunta">
                <h2>
                    Disciplinas
                </h2>
            </div>
            <div className="container">
                <div className="video-container">
                    <i className="bi bi-book"></i>
                    <h3>Vídeos de Matemática</h3>
                    {/* Aqui você pode adicionar seus vídeos de matemática */}
                </div>
                <div className="video-container">
                    <i className="bi bi-book"></i>
                    <h3>Vídeos de Português</h3>
                    {/* Aqui você pode adicionar seus vídeos de português */}
                </div>
                <div className="video-container">
                    <i className="bi bi-book"></i>
                    <h3>Vídeos de Geografia</h3>
                    {/* Aqui você pode adicionar seus vídeos de geografia */}
                </div>
            </div>
            {/* Espaço para o item do Bootstrap */}
            <div className="bootstrap-item">
                {/* Adicione aqui o item do Bootstrap */}
            </div>
        </div>
    );
}

export default Videos;
