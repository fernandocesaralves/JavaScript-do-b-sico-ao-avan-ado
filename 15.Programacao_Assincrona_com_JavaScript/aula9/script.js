// Generators funcionam semelhantes as Promises

// Onde ações podem ser pausadas e continuadas depois 

// Caracterizados pelo function* e yield,

// O yield pode salvar o estado da variável 

function* criadorDeId() {
    let id = 0;
    while(true) {
        yield id ++; 
    }
}

let criaId = criadorDeId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);

console.log(criaId.next());