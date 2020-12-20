// Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais

const reg = /\w+: (Fernando|João|Thais)/;

console.log(reg.test("Nome: Fernando"));
console.log(reg.test("Nome: Zequinha"));
console.log(reg.test("Nome: Thais"));