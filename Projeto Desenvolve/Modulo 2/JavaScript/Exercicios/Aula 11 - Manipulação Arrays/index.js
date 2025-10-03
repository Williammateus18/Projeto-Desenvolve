const cores = ['Preto', 'Branco'];
/* 
console.log(cores);
console.log('Primeiro elemento:',cores[0]);
console.log('Segundo elemento:',cores[1]);
console.log('Quantidade de elementos:',cores.length);
console.log(cores.indexOf('Preto'));
console.log(cores.indexOf('Branco'));
console.log(cores.indexOf('Vermelho'));
*/
console.log(cores.indexOf('Vermelho'));
// push adiciona um elemento no final da lista.
cores.push('Vermelho');
console.log(cores);
console.log(cores.length);
console.log(cores.indexOf('Vermelho'));
console.log(cores.indexOf('Azul'));
cores.push('Azul');
console.log(cores.length);
// shift remove o primeiro item da lista "0".
cores.shift();
console.log(cores);
// unshift adiciona no começo da lista.
cores.unshift('Preto');
console.log(cores);
// pop remove o ulimo item da lista.
cores.pop();
console.log(cores);

function removeCor(nomeDaCor){
    const posicaoDaCor = cores.indexOf(nomeDaCor);
    if(posicaoDaCor >= 0){
        cores.splice(posicaoDaCor, 1);    
    }
    // splice remove o item a partir do index que for passado, depois precisa aponta quantos itens serão apagados
    console.log(cores);
}

removeCor('Branco');
removeCor('Vermelho');
removeCor('Vermelho');