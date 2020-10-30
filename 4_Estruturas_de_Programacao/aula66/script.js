// Quando há a necessidade de vários ifs, podemos utilizar o switch/case

// Para sair de um case podemos utilizar o break;

// Podemos inserir uma expressão default, para caso nenhum valor for correspondido

// Muitos programadores optam por usar vários ifs

// Não é muito utilizado 

let nome = "Fernando";

switch ( nome ) {
    case "Fernando":
        console.log("O nome é Fernando");
        break;

    case "João":
        console.log("O nome é João");
        break;

    case "Thais":
        console.log("O nome é Thais");
        break;

    case "Filomena": 
        console.log("O nome é Filomena");
        break;
    
    default:
        console.log("O nome não foi encontrado");
        break;
}


if ( nome == "Fernando" ) {
    console.log("O nome é Fernando");
} else {
    console.log("Nome não encontrado");
}