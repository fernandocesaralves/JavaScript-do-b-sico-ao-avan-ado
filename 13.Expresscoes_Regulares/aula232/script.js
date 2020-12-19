// Ocorrência precisa 

// Inserir o número de ocorrência entre {};

const cep = /\d{5}-\d{3}/;

console.log("Operador de precisão");
console.log(cep.test("08589-211"));
console.log(cep.test("hhdudu"));
console.log(cep.test("0877-443"));
console.log(cep.test("99999-999"));


const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log("Telefone");
console.log(tel.test("(11)4641-2001"));
console.log(tel.test("(11)94641-2001"));