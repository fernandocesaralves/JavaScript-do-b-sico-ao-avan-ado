let idade = 19;

let cnh = true;

if ( idade >= 18 && cnh == true ) {
    console.log("Sim, pode dirigir");
} else if ( idade >= 18 && cnh == false ) {
    console.log("Não pode dirigir, mas pode tirar sua CNH");
} else {
    console.log("Não pode dirigir");
}