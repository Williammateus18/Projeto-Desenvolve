// pega a tag do elemento.
// tag retorna uma lista
const elemento = document.getElementsByTagName('header');
console.log(elemento);

const elementoPorId = document.getElementById('titulo-principal')
// ID retorna somente um elemento.
// innerText retorna o texto que está no elemento.
// se não colocar, vai retorna todo o elemento.
console.log(elementoPorId.innerText); 

const elementosPorClasse = document.getElementsByClassName('paragrafo');
// por se tratar de uma array (lista), para exibir oque está no elemento, é necessario colocar [].
// classe retorna uma lista
console.log(elementosPorClasse[0].innerText);

const elementoPorNome = document.getElementsByName('meu-botao');
// retorna uma lista, sendo necessario colocar a qual index deseja visualizar
// mais utilizado em formulario.
console.log(elementoPorNome[0].innerText);

const verificaSeExisteTag = (elemento) => document.getElementsByTagName(elemento).length > 0;
const verificaSeExisteId = (elemento) => !!document.getElementById(elemento);
const verificaSeExisteClasse = (elemento) => document.getElementsByClassName(elemento).length > 0;
const verificaSeExisteName = (elemento) => document.getElementsByName(elemento).length > 0;
console.log(verificaSeExisteTag('main'));
console.log(verificaSeExisteId('meu-botao'));
console.log(verificaSeExisteClasse('paragrafo'));
console.log(verificaSeExisteName('meu-botao'));

const listaDeElementos = ['header' , 'ul', 'meu-botao', 'titulo-principal'];

const descobreTipoDoElemento = (lista) => {
    if(listaDeElementos.length === 0) {
        console.log('Você não passou uma lista de elementos');
    }
    else { 
        for(let nome of lista) {
            if(verificaSeExisteTag(nome))
                console.log(`${nome} é uma tag`);
            else if(verificaSeExisteId(nome))
                console.log(`${nome} é um id`);
            else if(verificaSeExisteClasse(nome))
                console.log(`${nome} é uma classe`);
            else if(verificaSeExisteName(nome))
                console.log(`${nome} é um nome`);
            else {
                console.log(`${nome} não está no DOM`);
            }
        }
    }
}

descobreTipoDoElemento(listaDeElementos);
