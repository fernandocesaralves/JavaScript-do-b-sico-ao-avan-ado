// \d - Qualquer dígito de caractere

// \w - Um caractere alfanumérico ("teste")

// \s - Qualquer caractere de espaço em branco 

// \D - Caracteres que não são dígitos 

// W - Caracteres não-alfanumérico 

// S - Caractere que não seja espaço em branco 

// . - Qualquer caractere, menos nova linha

const pontoRegex = /./; 

console.log('.');
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));


const dRegex = /\d/; // [0-9]

console.log('d');
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));


const DRegex = /\D/; // [^0-9]

console.log('D');
console.log(DRegex.test("asd"));
console.log(DRegex.test(" "));
console.log(DRegex.test("123"));
console.log(DRegex.test("123asd"));


const sRegex = /\s/; 

console.log('s');
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));


const wRegex = /\w/; 

console.log('w');
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));