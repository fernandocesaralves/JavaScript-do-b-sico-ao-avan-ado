// Da seguinte forma, podemos validar um e-mail

const validandoEmail = /\w+@\w+\.\w+/;

console.log(validandoEmail.test("fernando@gmail.com"));
console.log(validandoEmail.test("fernando@gmail"));
console.log(validandoEmail.test("gmail.com"));
console.log(validandoEmail.test("fernando@gmail.com.br"));
console.log(validandoEmail.test("fernando@gmail.gmail.gmail.gmail"));

