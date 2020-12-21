// Crie uma regex que aceita só letras maiúsculas

// Depois teste

const validarMaiusculo = /[A-Z]/;

console.log(validarMaiusculo.test("A"));
console.log(validarMaiusculo.test("a"));
console.log(validarMaiusculo.test("Ab"));
console.log(validarMaiusculo.test("aB"));