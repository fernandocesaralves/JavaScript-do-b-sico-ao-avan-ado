// Ainda podemos encadear mais condições com o else if

// Ou seja, antes de executar um else, ou até mesmo sem ele podemos verificar

let nome = "Fernando";
let idade = 26;

if ( nome != undefined && nome == "João" ) {
    console.log("O nome está definido");
} else if ( nome == "Fernando" && nome.length > 5 && idade == 50 ) {
    console.log("O nome é Fernando");
} else {
    console.log("O nome não é Fernando");
}

if ( 1 > 2 ) {
    console.log("Teste");
} else if ( 1 == 1 ) {
    console.log("Testando");
} 