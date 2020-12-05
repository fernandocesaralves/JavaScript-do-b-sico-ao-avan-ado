// Crie um Array a partir de uma frase

// Imprima cada palavra do array console por meio de um for 

let frase = "Eu sou um cara legal?";

let arrayDeFrase = frase.split(" ");
console.log(arrayDeFrase);

for ( let i = 0; i < arrayDeFrase.length; i++ ) {
    console.log(arrayDeFrase[i]);
}


