// Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown

// Podemos realizar ações nestes eventos também 

// Keyup é quando soltamos a tecla 

// Keydown é quando apertamos 

window.addEventListener("keydown", function(e) {

    if(e.key == 'q') {
        console.log("Você apertou a letra Q");
    } else if(e.key == 'Enter') {
        console.log("Você apertou a tecla Entrer");
    }

});

window.addEventListener("keyup", function(e) {

    if(e.key == "Enter") {
        console.log("Soltou a tecla Entrer");
    }

});

