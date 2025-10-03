const botao = document.getElementById('meu-botao');
const inputText = document.getElementById('texto');

// addEventListener = Gerá alguma ação quando alguma coisa acontecer, "load", quando a pagina carregar,
// mouseover: mouse passar por cima
// click: quando o elemento for clicado!
botao.addEventListener('click', () => {
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = 'Clicou para limpar o título';
});

inputText.addEventListener('keypress', (e) => {
    const titulo = document.getElementById('titulo-principal')
    titulo.innerText = e.target.value
})