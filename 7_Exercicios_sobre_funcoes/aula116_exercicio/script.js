// Escreva uma função que receba a idade de uma pessoa 

// Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso 

// Se ela tem menos, ela não pode, imprima outra mensagem com este aviso

// Execute a função nos dois casos.

function autoEscola(idade) {
    if (idade >= 18 ) {
        console.log("Pode entrar na auto-escola");
    } else {
        console.log("Você não tem a idade mínima para fazer auto-escola");
    }
}

autoEscola(18);
autoEscola(17);