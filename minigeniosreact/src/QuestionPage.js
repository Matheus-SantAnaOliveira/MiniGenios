import React, { useState } from 'react';
import '/assets/css/telaPerguntas.css'
const QuestionPage = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita o envio do formulário padrão

        if (selectedOption) {
            // Desabilita todas as opções
            document.querySelectorAll('.option input[type="radio"]').forEach(function(input) {
                input.disabled = true;
            });

            // Lógica para verificar se a opção selecionada está correta
            if (selectedOption === "A") {
                // Destaca a alternativa correta
                document.getElementById('option-a').parentElement.classList.add('correct-answer');
            } else {
                // Destaca a alternativa selecionada como errada
                document.getElementById(`option-${selectedOption.toLowerCase()}`).parentElement.classList.add('wrong-answer');
                // Encontra e destaca a alternativa correta
                document.getElementById('option-a').parentElement.classList.add('correct-answer');
            }
        }
    }

    return (
        <div className="main-content">
            <div className="quest">
                <h1>Questão</h1>
            </div>
            <div className="pergunta">
                <h2>sobre o uso dos porquês</h2>
            </div>
            <div className="question-container">
                <div className="container-header">
                    <div className="question">Pergunta 1</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>A Alternativa correta sobre o uso dos Porquês é:</h3>
                    </div>
                    <div className="options-container">
                        <div className="option">
                            <input
                                type="radio"
                                id="option-a"
                                name="answer"
                                value="A"
                                onChange={() => setSelectedOption("A")}
                            />
                            <label htmlFor="option-a">A</label>
                            <p>Ele não veio por que estava doente.</p>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                id="option-b"
                                name="answer"
                                value="B"
                                onChange={() => setSelectedOption("B")}
                            />
                            <label htmlFor="option-b">B</label>
                            <p>Eis o porquê da minha viagem.</p>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                id="option-c"
                                name="answer"
                                value="C"
                                onChange={() => setSelectedOption("C")}
                            />
                            <label htmlFor="option-c">C</label>
                            <p>Estavam ansiosos porque o dia já havia amanhecido.</p>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                id="option-d"
                                name="answer"
                                value="D"
                                onChange={() => setSelectedOption("D")}
                            />
                            <label htmlFor="option-d">D</label>
                            <p>Não revelou o motivo por que não foi ao trabalho.</p>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Enviar Resposta</button>
                </form>
            </div>
        </div>
    );
}

export default QuestionPage;
