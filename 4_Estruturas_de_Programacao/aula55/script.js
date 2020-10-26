// Estrutura condicional if

// O programa vai executar um bloco de código, SE algo acontecer

// Onde esse algo é a condição imposta por um statement

let idade = 19;

if ( idade == 19 ) {
    console.log("A idade é igual a 19");
}

if ( idade > 25 ) {
    console.log("A idade é maior do que 25");
}

let nome = "Fernando";

if ( nome == "Fernando" && idade > 10 ) {
    console.log("liberado!");
}

let passaporte = true;

if ( (nome == "Fernando" && idade > 30) || passaporte == true ) {
    console.log("liberado 2!");
}

