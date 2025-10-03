// Objetos também é uma lista
// a diferença de objetos é indexizada por nome.
// Objetos é por "{}"
// Arrays é por "[]"
const meusDados = {
    nome: 'William',
    sobrenome: 'Silva',
    moraNoBrasil: true,
    idade: 25
}
console.log(meusDados);
// ao adicionar o . depois do nome do objeto, aparece os indices.
console.log(meusDados.nome);
console.log(meusDados['sobrenome']);

function retornaDadoPessoal(dadoPessoal){
    return meusDados[dadoPessoal];
}

console.log(retornaDadoPessoal('moraNoBrasil'));