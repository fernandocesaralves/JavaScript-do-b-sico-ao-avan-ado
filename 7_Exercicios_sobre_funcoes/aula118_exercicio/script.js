// Escreva uma função que detecta o tipo de dado passado 

// Verefique se é number, boolean ou string

// E retorne uma mensagem para cada tipo 

// Execute uma função para cada caso 

function tipoDeDado(n, b, c) {

    if ( n === number || b === number || c === number ) {
        console.log("É um número");
    
    } else if ( n=== string || b === string || c === string ) {
        console.log("É um texto");

    } else if ( n === boolean || b === boolean || c === boolean) {
        console.log("É um boolean");

    }


}


// Correção

function verificaTipoDeDado(dado) {

    if (typeof dado === "string") {
        console.log("Esse dado é uma string");

    } else if (typeof dado === "number") {
        console.log("Esse dado é um número");

    } else if (typeof dado === "boolean") {
        console.log("Esse dado é um boolean");

    }


}

verificaTipoDeDado(true);
verificaTipoDeDado(27);
verificaTipoDeDado("Fernando");