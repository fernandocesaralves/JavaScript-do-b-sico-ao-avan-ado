// Escreva uma função que some dois números e retorne eles

// Depois imprima esse retorno


// Errado 
function somarDoisnumeros(n1, n2) {
    (n1 + n2);
    return;
}

console.log(somarDoisnumeros(2,3));


// Correção 
function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(4,6));
console.log(soma(5,10));