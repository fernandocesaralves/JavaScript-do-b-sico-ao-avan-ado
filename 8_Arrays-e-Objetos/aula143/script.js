// Retorna um array a partir de outro array 

// O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array 

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros.slice(4,5));
console.log(numeros.slice(4,6));


console.log(numeros.slice(2));

console.log(numeros.slice(-2)); // Dessa forma ele vai pegar os índices do array começando do último

console.log(numeros.slice(-3));


console.log(numeros.slice(2,-3)); // Também podemos unir as duas formas