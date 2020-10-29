// Dependendo da nossa lógica, podemos pular o resto da execução do loop 

// Para isso utilizamos o palavra continue

for ( let i = 10; i > 0; i -= 1 ) {

    if ( i % 2 == 0 ) {
        console.log("Caiu no continue"); // O continue irá pular um determinado trecho de código, sempre que atingir a condição
        continue;
    }

    console.log(i);

}