// Crie um JSON com 3 propriedades

// Atribua ele a uma variável 

// Acesse as propriedades imrpimindo no console

let pessoa = {
    "nome": "Fernando",
    "altura": 1.70,
    "idade": 27
}

// Não precisava atribuir os valores para novas variáveis, apenas mostrar os valores no console.log 
const {"nome": vNome, "altura": vAltura, "idade": vIdade} = pessoa;

console.log(vNome);
console.log(vAltura);
console.log(vIdade);






// Dessa forma aqui: 
console.log(pessoa.nome);
console.log(pessoa.altura);
console.log(pessoa.idade);

