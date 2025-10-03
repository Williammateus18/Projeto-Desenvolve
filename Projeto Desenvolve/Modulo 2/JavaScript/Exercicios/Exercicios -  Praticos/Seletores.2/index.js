const listaCurtidas = [];
const texto = document.getElementById("texto");
const botao = document.getElementById("botao");
const paragrafo = document.querySelector("p");

botao.addEventListener("click", () => {
    const nome = texto.value.trim();
    if (nome !== "") {
        if (!listaCurtidas.includes(nome)) {
            listaCurtidas.push(nome);
        }
    }
    texto.value = "";
    atualizarMensagem();
});

function atualizarMensagem() {
    if (listaCurtidas.length === 0) {
        paragrafo.textContent = "Ninguém curtiu";
    } else if (listaCurtidas.length === 1) {
        paragrafo.textContent = `${listaCurtidas[0]} curtiu`;
    } else if (listaCurtidas.length === 2) {
        paragrafo.textContent = `${listaCurtidas[0]} e ${listaCurtidas[1]} curtiram`;
    } else {
        paragrafo.textContent = `${listaCurtidas[0]}, ${listaCurtidas[1]} e mais ${listaCurtidas.length - 2} pessoas curtiram`;
    }
}
