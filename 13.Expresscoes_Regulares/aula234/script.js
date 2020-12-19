// O método match funciona de forma similar ao exec

const frase = "O numero 100 esta aqui".match(/\d+/);
const frase2 = "O numero não esta aqui".match(/\d+/);

console.log(frase);
console.log(frase2);