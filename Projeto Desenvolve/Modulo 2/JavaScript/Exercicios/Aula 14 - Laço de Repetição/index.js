const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34];


// let i = declara uma variavel iniciada em 0 para observar as condições dessa função mudando.
// a proxima é a condição (i < fibonacci.length) ou seja, enquanto i for menor que o comprimento da lista fibonacci.
// ele vai continuar rodando até que sejá falsa essa condição.
// incrementando o valor de i = i++
// ou seja, i = 0, variavel começa com 0
// no for: declara a variavel para observar as condições; qual a condição de parada; oque vai fazer depois da condição.

function iteraSobreoArray() {
    for (let i = 0; i < fibonacci.length; i++) {
    console.log(i+1,'° item',fibonacci[i]);
    }
}
iteraSobreoArray();
console.log('---------------------------------')

function contaAte(numero){
    for(let i = 1; i <= numero; i++) {
        console.log('Mariana conta ',i);
    }
}

contaAte(2);

// for of para saber os itens dentro da lista
function verificaItemNoArray(listadeNumeros) {
    for (let item of listadeNumeros) {
        console.log(item);
    }
}

verificaItemNoArray(fibonacci);
console.log('--------------------------')
// for in para saber a posição dos itens
function verificaItemPorIndice(listadeNumeros) {
    for(let indice in listadeNumeros) {
        console.log(listadeNumeros[indice]);
    }
}
verificaItemPorIndice(fibonacci);
console.log('--------------------------')
function contaPeloMenosUmAte(numeroLimite) {
    let numero = 0;
    do {
        console.log(numero);
        numero++;
    }while(numero <= numeroLimite);
}
contaPeloMenosUmAte(5);

// verifica a condicional primeiro
function verificaSePodeAte(numeroLimite) {
    let numero = 0;
    while(numero <= numeroLimite) {
    console.log(numero);
    numero++;
    }
}

verificaSePodeAte(1);
verificaSePodeAte(0);

