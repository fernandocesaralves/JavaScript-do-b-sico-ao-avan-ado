// Além de propriedades, podemos criar a classe base já com métodos

// Basta definir ao prototype o método desejado

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() {
    console.log("Auuuu!");
}

Cachorro.prototype.latir = function() {
    console.log("au, au au!");
}

let husky = new Cachorro('Husky', 4, 'Cinza');

husky.uivar();
husky.latir();