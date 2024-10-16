function abrirMateria(materia) {
    if (materia === 'biologia') {
        window.location.href = 'biologia.html';
    } else if (materia === 'matematica') {
        window.location.href = 'matematica.html';
    } else if (materia === 'quimica')   {
       window.location.href = 'quimica.html';
    } else if (materia === 'portugues') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'portugues.html';
    }  else if (materia === 'historia') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
       window.location.href = 'historia.html';
    }  else if (materia === 'sociologia') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'sociologia.html';
    }
    else if (materia === 'biotecnologia') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'biotecnologia.html';
    }
    else if (materia === 'empreendedorismo') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'empreendedorismo.html';
    }
    else if (materia === 'arteemidiasdigitais') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'arteemidiasdigitais.html';
    }
    else if (materia === 'educacaofinanceira') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'educacaofinanceira.html';
    }
    else if (materia === 'educacaofisica') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'educacaofisica.html';
    }
    else if (materia === 'fisica') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'fisica.html';
    }
    else if (materia === 'geografia') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'geografia.html';
    }
    else if (materia === 'lideranca') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'lideranca.html';
    }
    else if (materia === 'ingles') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'ingles.html';
    }
    else if (materia === 'oratoria') {                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        window.location.href = 'oratoria.html';
    }  
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
