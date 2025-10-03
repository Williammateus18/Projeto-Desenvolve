function eDediaOuEdeNoite(hora) {
    let periodo = ';'
    if (hora <= 18)
        periodo = 'É de dia';
    else
        periodo = 'É de noite';
    return periodo;
}

console.log(eDediaOuEdeNoite());
console.log(eDediaOuEdeNoite(11));
console.log(eDediaOuEdeNoite(21));

console.log("---------------------------------------")

function eMaiorDeIdade(Idade){
    if(Idade < 18)
        console.log("Menor de Idade");
    else 
        console.log("Maior de Idade")
}
eMaiorDeIdade(25);
console.log("---------------------------------------")

function periodoDoDia(hora){
    if(hora < 12)
        console.log("Manha");
    else if(hora >= 12 && hora <18)
        console.log('Tarde');
    else
        console.log("Noite");
}

periodoDoDia(2);
periodoDoDia(14);
periodoDoDia(20);
periodoDoDia(-30);

console.log("---------------------------------------")
// A função condicional verifica se é verdadeiro ou falso e "and"
function periodoComRegra(hora){
    if (hora >= 0 && hora <= 24)
        periodoDoDia(hora);
    else 
        console.log("Você passou uma hora inexistente!!!")
}

periodoComRegra(2);
periodoComRegra(17);
periodoComRegra(22);
periodoComRegra(-40);
console.log("---------------------------------------")
// A função Switch verifica se o parametro está dentro das opções
function menuEscolha(opcaoDoMenu){
    switch(opcaoDoMenu){
        case 1: 
            console.log("Você escolheu a primeira opção");
        break;
        case 2: 
            console.log("Você escolheu a segunda opção");
        break;
        default:
            console.log("Você não escolheu uma das opções válidas")
    }
}

menuEscolha(1);
menuEscolha(2);
menuEscolha();
console.log("---------------------------------------")

//Ternario, antes do ponto de exclamação "?" vem a condição, então "?", primeira é no caso de verdade, SENÃO ":", segunda.
// ? = ENTÃO 
// : SENÃO
function maiorDeIdadeSimples(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}
console.log(maiorDeIdadeSimples(12));
console.log(maiorDeIdadeSimples(18));
console.log("---------------------------------------")

//Operador unario só retorna a string se for verdade, se o parametro passado não se encaixa, será retornado false, se não passa vai retorna true ou false.
function maiorDeIdadeUnario(idade) {
    return idade >= 18 && "Maior de idade"
}
console.log(maiorDeIdadeUnario(18))
console.log(maiorDeIdadeUnario(3))
console.log("---------------------------------------")

function maiorDeIdadeUnarioCondicao(idade) {
    return idade >= 18;
}
console.log(maiorDeIdadeUnarioCondicao(18))
console.log(maiorDeIdadeUnarioCondicao(3))
console.log("---------------------------------------")
