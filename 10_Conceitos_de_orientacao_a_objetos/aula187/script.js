// O prototype do javaScript pode ser chamado de classe

// Pois nas outras linguegens uma Class é um molde de um objeto

// Ou seja, podemos criar diversos objetos em cima de um prototype

let cachorro = {
    patas: 4,
    raca: 'SND',
    latir: function() {
        console.log("Au au!");
    }
};

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor Alemão";
console.log(pastor.raca);