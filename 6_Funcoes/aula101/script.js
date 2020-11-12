// Se só tem um parâmetro podemos remover os parênteses do argumento e o return 

// Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código

const multiplicarPorDois = (x) => {
    return x * 2;
}

console.log(multiplicarPorDois(2));

const multiplicarPorDois2 = x => x * 2; // Caso o noso Arrow Function seja simples, podemos declarar ele asim

console.log(multiplicarPorDois2(4));