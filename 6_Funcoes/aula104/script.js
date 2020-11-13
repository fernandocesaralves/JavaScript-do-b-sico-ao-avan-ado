// Uma função que se lembra do ambiente em que ela foi criada

function lembrarSOma(x) {
    return function(y) {
        return x + y;
    }
}


let soma1 = lembrarSOma(2);

console.log(soma1(5));


let soma2 = lembrarSOma(10);

console.log(soma2(7));


function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();


let meuContador2 = contador(3);
meuContador2();
meuContador2();
meuContador2();
meuContador2();