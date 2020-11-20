// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com o loop

// Além disso imprima somente os números pares no console

function decrementar(indice) {

    for ( indice > 0; indice --; ) {
        if( indice % 2 == 0 ) {
            console.log(indice);
        }
    }
}

console.log(decrementar(15));



