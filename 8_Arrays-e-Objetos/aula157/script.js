// Podemos converter o JSON para uma string de forma fácil 

// Ou também uma string para JSON

let pessoa = {
   "nome": "Fernando",
   "profissão": "Programador",
   "idade": 27,
   "hobbies": ["Video game", "leitura", "caminhar"] 
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
console.log(pessoaJSON.hobbies[0]);