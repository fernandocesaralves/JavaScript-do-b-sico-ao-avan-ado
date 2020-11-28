// shit: remove o primeiro elemento de um array

// unshit: adiciona um ou mais elementos no início do Array

let carros = ["BMW", "Audi", "Ferrari", "VW", "Fiat"];

let removerPrimeiro = carros.shift();

console.log(removerPrimeiro);
console.log(carros);

carros.unshift("Palio");

console.log(carros);
console.log(carros[0]);