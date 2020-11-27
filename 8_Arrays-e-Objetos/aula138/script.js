// Um objeto pode herdar todas as características de outro, virando uma referência ao mesmo

let pessoa = {
   nome: 'Fernando',
}

let pessoa2 = pessoa;

let pessoa3 = {
   nome: 'Fernando',
}

console.log(pessoa == pessoa);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);


pessoa2.nome = 'Pedro';

console.log(pessoa.nome);

pessoa.nome = 'Maria';

console.log(pessoa2.nome);