//Escopo é quando você consegue acessar um bloco, ou seja, só é possivel acessar as variaveis dentro daquele bloco / daquela função
/*Bloco global inicio 1*/
const todoMundoVe = 'Todo mundo vê esta variavelde escopo global'; 
//Variavel global é visivel para todo o codigo

function executaEscopoGlobal(){
    console.log(todoMundoVe); 
}

function executaEscopoLocal(){/*Bloco local inicio 1*/
    const visivelEmEscopoLocal = 'Só quem está dentro do bloco da função vê esta variavel de escopo local'
    console.log(visivelEmEscopoLocal);
    //Variavel local é somente visualizada e existe somente dentro da função

    function chamaDentroDoEscopo(){ /*Bloco local inicio 2*/
        console.log('Dentro do escopo =>', visivelEmEscopoLocal)
        const dentroDoLocal = false;
        console.log(dentroDoLocal)
        //Essa variavel 'dentroDoLocal' não é visivel para o bloco local 1
        /*Bloco local final 2*/
    }

    chamaDentroDoEscopo()
    /*Bloco local final 1*/
}

executaEscopoGlobal();

executaEscopoLocal();
/*Bloco global final 1*/