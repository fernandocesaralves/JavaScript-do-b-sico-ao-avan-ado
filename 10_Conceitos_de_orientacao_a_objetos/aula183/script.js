// Propriedades que servem como funções

// Ou seja, as ações dos objetos

// Invocam os métodos da mesma maneira que funções


const cachorro = {
    uivar: function() {
        console.log("Auuuu!");
    },
    rosnar: function() {
        console.log("grrrr");
    }
}

cachorro.uivar();
cachorro.rosnar();