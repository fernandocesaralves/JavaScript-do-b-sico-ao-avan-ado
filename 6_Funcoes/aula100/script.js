// Uma outra forma de escrever funções

// Bem utilizada nos frameworks modernos

// Porém não deve substituir as functions por completo (Veremos mais tarde os detalhes)

// Ela não tem nome, "é uma função anônima"

// o Arrow é esse símbolo aqui "=>"

let consoleTeste = () => {
    console.log("Olá Mundo!");
};

consoleTeste();

let soma = (a,b) => {
    return a + b;
};

console.log(soma(10,20));