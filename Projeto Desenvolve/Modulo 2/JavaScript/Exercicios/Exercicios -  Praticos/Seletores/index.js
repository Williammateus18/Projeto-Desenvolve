const mudaTitulo = (novoTitulo) => {
    const titulo = document.getElementById('titulo-principal');
    titulo.innerText = novoTitulo;
}

setTimeout(() => mudaTitulo('Oba, Alterei o título'), 3000);

const listaDeLi = document.getElementsByTagName('li')
const listaDeCores = ['#d60000', '#f9d335'];
const listaDePargrafos = document.getElementsByTagName('p');
const botao = document.getElementsByTagName('button') [0]

setTimeout(() => {
    botao.innerText = 'Clique com o novo  texto';
    botao.style.fontSize = '60px';

}, 3000)

for(let paragrafo of listaDePargrafos) {
    paragrafo.classList = 'paragrafo'
}

for(let li in listaDeLi) {
    listaDeLi[li].style.color = listaDeCores[li];
}

setTimeout(() => botao.innerText = 'Clique com o novo texto', 3000)
