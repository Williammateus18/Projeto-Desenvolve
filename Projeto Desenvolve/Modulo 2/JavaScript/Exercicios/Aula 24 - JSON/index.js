const botao = document.getElementById('meu-botao');
const inputText = document.getElementById('texto');
const titulo = document.createElement('h1');

// stringify: converter em um texto corrido, para podermos gravar no navegador!
botao.addEventListener('click', () => {
    const nomeSalvo = JSON.stringify(titulo.innerText);
    localStorage.setItem('dadosUsuario', nomeSalvo);
    document.body.appendChild(titulo);
});

inputText.addEventListener('keyup', (e) => {
    titulo.innerText = e.target.value
})

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
})