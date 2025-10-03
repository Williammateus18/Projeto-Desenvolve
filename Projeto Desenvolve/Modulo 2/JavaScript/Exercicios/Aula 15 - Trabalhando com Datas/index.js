const dataAtual = new Date();

console.log(dataAtual);
console.log(dataAtual.getDate()); //Data do mês.
console.log(dataAtual.getMonth()+1); // Mês do ano, ele sempre retorna o mes anterior, então é preciso colocar o +1.
console.log(dataAtual.getUTCHours()); //Retorna o ano com 4 digitos.
console.log(dataAtual.getHours()); // Retorna a hora
console.log(dataAtual.getMinutes()); // Retorna os minutos
console.log(dataAtual.getSeconds()); // Retorna os segundos
console.log(dataAtual.toUTCString()); // Converte para UTC
console.log(dataAtual.toISOString()); //Converte para ISO