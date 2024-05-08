document.getElementById("answer-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Pega a alternativa selecionada
    let selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        // Desabilita todas as opções
        document.querySelectorAll('.option input[type="radio"]').forEach(function(input) {
            input.disabled = true;
        });

        // Checa se a alternativa selecionada está correta (pode ser implementada a lógica de acordo com sua necessidade)
        if (selectedOption.value === "A") {
            // Destaca a alternativa correta
            selectedOption.parentElement.classList.add('correct-answer');
        } else {
            // Destaca a alternativa selecionada como errada
            selectedOption.parentElement.classList.add('wrong-answer');
            // Encontra e destaca a alternativa correta
            document.querySelector('.option input[value="A"]').parentElement.classList.add('correct-answer');
        }
    }
});
