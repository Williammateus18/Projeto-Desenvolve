function chamar(segundosDeAtrasos) {
    console.log(`Atrasou ${segundosDeAtrasos} segundos`);
}

function chamaAtrasado(funcaoDeAtraso, quantidadeAtraso) {
    setTimeout(() => funcaoDeAtraso(quantidadeAtraso), quantidadeAtraso * 1000);
    //setTimeout: atrasar a chamada de uma função;
}

chamaAtrasado(chamar, 2);

function chamarComIntervalo(funcaoDeIntervalo, intervalo) {
    setInterval(() => funcaoDeIntervalo(intervalo), intervalo * 1000);
}

chamarComIntervalo(chamar, 2);