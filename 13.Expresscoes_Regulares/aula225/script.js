// Depois da definição do padrão por meio da regex

// Utilizamos o método teste() para verificar se o padrão é retornado

// Com isso vamos receber de respostas true or false, veja: 

const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem"));

const reg2 = /bola/;

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem"));

let text = "Tem bola na cesta";

console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("1273687368634quadrado36e764786487648"));
console.log(/quadrado/.test("gdhgdhgdhgdquadradodhduhdudh"));