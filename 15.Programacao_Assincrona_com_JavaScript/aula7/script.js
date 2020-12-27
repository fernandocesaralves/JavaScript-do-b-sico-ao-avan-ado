// Podemos criar funções assíncronas com a palavra reservada async

// Elas retornam uma PRomise

// Se for algo, a promissa é resolvida, se der alguma exception a promessa é rejeitda 

async function somar(a, b) {
    return a + b;
}

console.log(somar(2,4));

somar(2,4).then(value => console.log(value));