// Crie dois arrays, um com mais de 5 elementos e outro com menos 

// Faça uma função que verifica o número de elementos 

// Se possuir menos que 5, imprima "Poucos elementos" no console

// Se tiver mais, imprima "Muitos elementos"

let nomes = ["Maria", "João", "Fernando", "Thais", "Filomena", "Godzilla"];

let frutas = ["Goiaba", "Banana", "Maçã"];


/* Solução */
function verificarElementos(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

verificarElementos(nomes);
verificarElementos(frutas);