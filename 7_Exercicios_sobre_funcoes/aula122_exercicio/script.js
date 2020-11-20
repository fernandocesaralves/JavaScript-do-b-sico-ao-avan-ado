// Escrever uma função que recebe uma string

// Se o texto conter mais de 10 caracterres imprima "Texto muito longo"

// Se conter menos, imprima "Texto dentro do limite"

function tamanhoDoTexto(frase) {
    frase.length;

    if ( frase.length >= 10 ) {
        console.log("Texto muito longo");

    } else if ( frase.length <= 9 ) {
        console.log("Texto dentro do limite");

    }

}

tamanhoDoTexto("Fernando");

tamanhoDoTexto("Júlia Maria de Jesus");