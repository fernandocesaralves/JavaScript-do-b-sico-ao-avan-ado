// Faça uma estrutura if/else para verificar se um usuário pode dirigir

// Armazene em variáveis algumas informações sobre o usuário: idade, se tem CNH

// Se idade for maior que 18 e não possuir CNH, exiba uma mensagem 

// Se a idade for maior que 18 e tem CNH, exiba uma mensagem 

// Se não tiver 18 nem CNH, exiba outra mensagem 

let idade = 17;

let cnh = "Não";

if ( idade >= 18 && cnh == "Não") {
    console.log("Você precisa de uma CNH");
} else if ( idade >= 18 && cnh == "Sim" ) {
    console.log("Você está apto a dirigir");
} else if( idade < 18 && cnh == "Não") {
    console.log("Você não tem idade e nem habilitação para dirigir");
}