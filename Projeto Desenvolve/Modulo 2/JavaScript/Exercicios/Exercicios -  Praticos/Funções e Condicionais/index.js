//Modo function
const a = 50;
console.log('Valor de a =',a)
const b = 5;
console.log('Valor de b =', b)

function soma(){
    console.log('A soma de a e b é:',a + b);
}

soma();

function diferenca(){
    console.log('A diferença de a e b é:',a - b);
}

diferenca();

function divide(){
    console.log('A divisão de a e b é:',a / b);
}

divide();

function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

function mostraResultado(num1, num2){
    console.log(`A soma entre ${num1} e ${num2} é:`,soma(num1,num2));
    console.log(`A subtração entre ${num1} e ${num2} é:`,subtracao(num1,num2));
    console.log(`A multiplicação entre ${num1} e ${num2} é:`,multiplicacao(num1,num2));
    console.log(`A divisão entre ${num1} e ${num2} é:`,divisao(num1,num2));
}

mostraResultado(a,b);

//Modo arrow function
const Soma = (num1, num2) => num1 + num2
const Subtrai = (num1, num2) => num1 - num2
const Multiplica = (num1, num2) => num1 * num2
const Divide = (num1, num2) => num1 / num2

const mostraResultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}`, Soma(num1,num2))
    console.log(`A subtração entre ${num1} e ${num2} é:`,Subtrai(num1,num2));
    console.log(`A multiplicação entre ${num1} e ${num2} é:`,Multiplica(num1,num2));
    console.log(`A divisão entre ${num1} e ${num2} é:`,Divide(num1,num2));
}