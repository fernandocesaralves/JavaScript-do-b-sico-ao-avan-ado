// Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not

// Lembrando que combinações serão aceitas, o negado é apenas se bate com o set 

// Mais adiante aprenderemos negar de outras formas

const notab = /[^ab]/;

console.log("ab");
console.log(notab.test("a"));
console.log(notab.test("ab"));
console.log(notab.test("b"));
console.log(notab.test("Aqui tem a"));


const notaz = /[^a-z]/;

console.log("^a-z");
console.log(notaz.test("asd"));
console.log(notaz.test("123"));
console.log(notaz.test("123 abs"));
console.log(notaz.test("123abs"));

const az = /[a-z]/;

console.log("a-z");
console.log(az.test("asd"));
console.log(az.test("123"));
console.log(az.test("123 abs"));
console.log(az.test("123abs"));