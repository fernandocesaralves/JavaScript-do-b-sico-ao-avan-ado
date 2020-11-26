// Podemos adicionar e deletar propriedades ao longo do nosso programa 

let pessoa = {
   nome: "Fernando",
   idade: 28,
   profissao: "Programador", 
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);