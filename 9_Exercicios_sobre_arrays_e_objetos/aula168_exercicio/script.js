// Crie um array com 5 nomes, incluindo o seu 

// Verifique se o seu nome existe no array

// Se existir imprima alguma mensagem no console

let nomes = ["Fernando", "João", "Thais", "Pedro", "Francisco"];

if (nomes.indexOf("fernando")) {
    console.log("O seu nome está na lista, pode entrar");
} else {
    console.log("O seu nome não está na lista");
}


/* Respostas mais correta para o exercício seria essa: */
if (names.includes("Fernando")) {
    console.log("O seu nome foi encontrado");
} else {
    console.log("Nome não encontrado");
}