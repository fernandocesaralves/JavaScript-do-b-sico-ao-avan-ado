// O método exec nos retorna um objeto com algumas informações sobre regex

// Se nada for encontrado, retorna null

const digitos = /\d+/;

console.log(digitos.exec("tem o número 100 aqui"));
console.log(digitos.exec("tem número aqui"));