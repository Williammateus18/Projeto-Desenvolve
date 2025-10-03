// QuerySelector busca os elementos e retorna o primeiro

const verificaSeExisteElemento = (seletor) => {
    const elemento = document.querySelector(seletor)
    if(elemento) alert(`O elemento ${seletor} existe`);
    else alert (`O elemento ${seletor} não existe`);
    return !!elemento;
}

// verificaSeExisteElemento('header')

// QuerySelectorAll busca os elementos e retorna uma lista

const todosOsParagrafos = document.querySelectorAll('p');

const contaElementosPorSeletor = (seletor) => {
    if(verificaSeExisteElemento(seletor)) {
        const todosOsElementos = document.querySelectorAll(seletor);
        console.log(`Existem ${todosOsElementos.length} elementos com o seletor ${seletor}`)
    }
    else {
        console.log(`Não existem elementos com o seletor ${seletor}`)
    }
}

contaElementosPorSeletor('li.menu-item');
contaElementosPorSeletor('li.menu-items');

// Também é possivel retorna o valor desejado, como uma array
const elementoEspecifico = document.querySelectorAll('li') [1]
console.log(elementoEspecifico)