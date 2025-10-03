const selecionaTag = (elemento) => document.getElementsByTagName(elemento);
const selecionaId = (elemento) => document.getElementById(elemento);
const selecionaClasse = (elemento) => document.getElementsByClassName(elemento);
const selecionaNome = (elemento) => document.getElementsByName(elemento);

const tituloH1 = selecionaTag('h1');

tituloH1[0].innerText = 'Mudou texto';
console.log(tituloH1[0].classList);

const atrasaMudancaDeCor = () => 
    setTimeout(() => {
        const listaClasses = tituloH1[0].classList.value;
        tituloH1[0].classList = listaClasses + ' alterado-cor-bg';
        tituloH1[0].style.fontFamily = 'Arial';
        tituloH1[0].style.fontSize = '80px';
        console.log(tituloH1[0].classList);
        console.log(tituloH1[0].attributes);

    }, 3000);

atrasaMudancaDeCor();