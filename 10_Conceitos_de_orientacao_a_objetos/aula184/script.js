// Normalmente os métodos interagem com os objetos

// Até mudando os valores das duas propriedades para corresponder a lógica do programa desenvolvido 

const cachorro = {
    raca: '',
    uivar: function() {
        console.log("Auuuuu!");
    },
    rosnar: function() {
        console.log("grrrr!");
    },
    setraca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
};

console.log(cachorro.raca);

cachorro.setraca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca());