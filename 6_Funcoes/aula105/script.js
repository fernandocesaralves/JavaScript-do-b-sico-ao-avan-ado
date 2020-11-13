// Uma funcionalidade que permite uma função se chamar novamente

// Isso pode ser um problema caso a função se chame muitas vezes

function recursao(n) {

    if ( n - 1 < 2 ) {
        console.log("Recursao parou " + n);

    } else if ( n % 2 != 0 ) {
        console.log("Número ímpar " + n);
        recursao(n - 1);

    } else {
        console.log("Número par " + n);
        recursao(n - 2);

    }

}


recursao(39);
recursao(10);
recursao(55);