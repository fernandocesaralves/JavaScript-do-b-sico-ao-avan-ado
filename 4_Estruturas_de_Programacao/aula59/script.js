// Fará uma ação até que a condição seja atingida 

// Precisamos realmente 'definir um fim' para o loop, para não termos o problema de loop infinito


// Loop com decremento
let x = 10;

while ( x > 0 ) {
    console.log("O x é: " + x);
    x -= 1;
}


// Loop com incremento
let y = 0;

while ( y <= 10 ) {
    console.log("O valor de y é: " + y);
    y += 1;
}


// Loop infinito, erro
let z = 10;

while ( z > 0 ) {
    console.log(z); // z sempre vai ser maior do que zero, pos vale 10 
}