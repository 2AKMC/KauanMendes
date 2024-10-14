function abrirMateria(materia) {
    if (materia === 'biologia') {
        window.location.href = 'biologia.html';
    } else if (materia === 'matematica') {
        window.location.href = 'matematica.html';
    } else if (materia === 'quimica')
        window.location.href = 'quimica.html';
    else if (materia === 'portugues') {                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    }   window.location.href = 'portugues.html';
}

function carregarFlashcards(materia) {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = ''; 

    const perguntasMateria = perguntas[materia];

    perguntasMateria.forEach((flashcard) => {
        const card = document.createElement('div');
        card.classList.add('flashcard');

        const pergunta = document.createElement('p');
        pergunta.textContent = flashcard.pergunta;
        pergunta.classList.add('pergunta');

        const resposta = document.createElement('p');
        resposta.textContent = flashcard.resposta;
        resposta.classList.add('resposta');
        resposta.style.display = 'none'; 

        card.appendChild(pergunta);
        card.appendChild(resposta);

        card.addEventListener('click', function () {
            if (resposta.style.display === 'none') {
                resposta.style.display = 'block';
            } else {
                resposta.style.display = 'none';
            }
        });

        flashcardsContainer.appendChild(card);
    });
}
