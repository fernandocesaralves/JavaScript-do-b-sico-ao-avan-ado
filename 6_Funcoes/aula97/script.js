// Escopo de uma Função 

// O que acontece dentro de uma função fica separada do escopo global 

// O escopo global seria todo o arquivo de JavaScript

let y = 10;

function imprimir() {
    let y = 150;

    console.log(y);
}

imprimir();

console.log(y);