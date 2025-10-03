const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime();
    const diferencaDeDatas = dataFutura - agora;

    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDeUmDia = 24 * segundosDeUmaHora;
    
    const dias = Math.floor(diferencaDeDatas / segundosDeUmDia);
    const horas = Math.floor((diferencaDeDatas % segundosDeUmDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000);

    return {
        dias, 
        horas, 
        minutos,
        segundos
    }
}

const atualizarTemporizador = () => {
    const dataFutura = new Date('2026-01-01T00:00:00').getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `Quantidade de Dias: ${tempoRestante.dias}`;
    document.getElementById('horas').innerText = `Quantidade de Horas: ${tempoRestante.horas}`;
    document.getElementById('minutos').innerText = `Quantidade de Minutos: ${tempoRestante.minutos}`;
    document.getElementById('segundos').innerText = `Quantidade de Segundos: ${tempoRestante.segundos}`;

    const intervalo = setInterval(atualizarTemporizador, 1000);
}

atualizarTemporizador();