// Uma coleção de propriedades, parecidas com arrays

// Podemos acessar estas propriedades

let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function() {
        console.log("Au au!");
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();

// [] = Array

// {} = Objetos

let passaro = {
    patas: 2,
    nome: 'Pica-pau',
    bicar: function() {
        console.log("tec tec tec");
    }
}

console.log(passaro.patas);
console.log(passaro.nome);
passaro.bicar();