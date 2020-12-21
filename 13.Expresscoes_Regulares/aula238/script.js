// Da seguinte forma, podemos validar uma data de nascimento 

const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test("16/11/1993"));
console.log(validarDataNasc.test("5/10/1973"));
console.log(validarDataNasc.test("16-11-1993"));
console.log(validarDataNasc.test("16/11/93"));
console.log(validarDataNasc.test("99/99/9999"));
console.log(validarDataNasc.test("31/02/2010"));