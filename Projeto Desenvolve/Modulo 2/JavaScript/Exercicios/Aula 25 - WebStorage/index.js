const botao = document.getElementById('meu-botao');
const inputText = document.getElementById('texto');
const botaoEsquecer = document.getElementById('esquecer');

// stringify: converter em um texto corrido, para podermos gravar no navegador!
botao.addEventListener('click', () => {
    const nomeSalvo = JSON.stringify(titulo.innerText);
    localStorage.setItem('dadosUsuario', nomeSalvo);
    document.body.appendChild(titulo);
});

inputText.addEventListener('keyup', (e) => {
    titulo.innerText = e.target.value
});

/*
addEventListener('load', () => {
    // desconverter para um texto para ser exibido!
    const meuNome = JSON.parse(localStorage.getItem('dadosUsuario'))  

    if(meuNome) {
        titulo.innerText = `Eu lembro de você, ${meuNome}`;
    }
    else {
        titulo.innerText = 'Desculpe, não estou me lembrando de você!'
    }
    document.body.appendChild(titulo);
});
*/


const frutas = ['Maça', 'Laranja', 'Melancia','Maça', 'Laranja', 'Melancia','Maça', 'Laranja', 'Melancia','Maça', 'Laranja', 'Melancia','Maça', 'Laranja', 'Melancia','Maça', 'Laranja', 'Melancia'];


//localStorage salva os dados apos carregamento e fechamento.
for(let fruta = 0; fruta < frutas.length; fruta++) {
    localStorage.setItem(`Fruta ${parseInt(fruta) + 3}`,frutas[fruta]);
}

// sessionStorage não salva os dados apos o carregamento e fechamento.
for(let fruta = 0; fruta < frutas.length; fruta++) {
    sessionStorage.setItem(`Fruta ${parseInt(fruta)}`,frutas[fruta]);
    console.log(sessionStorage.getItem(`Fruta ${parseInt(fruta)}`))
}

botaoEsquecer.addEventListener('click', () => localStorage.clear())

localStorage.setItem('Fruta 15', 'Mudei o valor da fruta');
