function imprimirNoConsole() {
    console.log("Olá Mundo!");
}

imprimirNoConsole(); // Uma função para ser executada tem que sempre ser invocada. 


// Função com Parâmetro 
function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(45);
imprimirUmNumero(3);
imprimirUmNumero(4);
imprimirUmNumero(10);


//Imprimir números aleatórios 
const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();