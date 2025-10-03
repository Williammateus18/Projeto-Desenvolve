const meusDados = {
    nome: 'William',
    sobrenome: 'Silva',
    moraNoBrasil: true,
    idade: 25,
    pegaDocumento: () => {
        console.log('CPF: 12345678900')
    }
};

// verificando se o objeto possui determinado valor (values retorna os valores)
function objetoPossuiValor(valorDaChave) {
    const valoresDoObjeto = Object.values(meusDados);
    return valoresDoObjeto.includes(valorDaChave);
}

console.log(objetoPossuiValor('William'));
console.log(objetoPossuiValor('Silva'));
console.log(objetoPossuiValor(true));
console.log(objetoPossuiValor(25));
console.log('----------------------------------')
console.log(objetoPossuiValor('Mateus'));
console.log(objetoPossuiValor('Cruz'));
console.log(objetoPossuiValor(false));
console.log(objetoPossuiValor(72));
console.log('----------------------------------')

// verifica se o objeto tem os indexadores (keys retorna os indexadores)
function objetoPossuiChave(nomeDaChave) {
    const valoresDoObjeto = Object.keys(meusDados);
    return valoresDoObjeto.includes(nomeDaChave);
}
console.log(objetoPossuiChave('nome'));
console.log(objetoPossuiChave('sobrenome'));
console.log(objetoPossuiChave('moraNoBrasil'));
console.log(objetoPossuiChave('idade'));
console.log('--------------------------------')
console.log(objetoPossuiChave('Nome'));
console.log(objetoPossuiChave('Sobrenome'));
console.log(objetoPossuiChave('MoraNoBrasil'));
console.log(objetoPossuiChave('carro'));

meusDados.pegaDocumento(); //a função pegaDocumento está dentro do meusDados
console.error('deu ruim'); // Em vermelho
console.info('informação é importante');
console.warn("ATENÇÃO!!!!!!"); // Em amarelo
