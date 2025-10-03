function chamaPrimeiro() {
    console.log('Chama essa primeiro')
}

function chamaDepois() {
    chamaPrimeiro();
    console.log('Entrou na segunda função');
}

function recebePrimeira(primeiraFuncao){
    primeiraFuncao();
}

recebePrimeira(chamaDepois);