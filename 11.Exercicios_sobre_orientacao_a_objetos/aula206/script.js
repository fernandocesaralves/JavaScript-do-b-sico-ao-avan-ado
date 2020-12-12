// Crie uma classe que simule um carro 

// Propriedades: marca, cor, gasolina restante

// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente 

// E um de abastecer para aumentar a gasolina quando necessário 

class Carro {
    constructor(marca, cor, gasolinaRest) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRest = gasolinaRest;
    }

    dirigir(quilometros) {
        this.gasolinaRest -= quilometros;
    }

    abastecer(colocarGasolina) {
        this.gasolinaRest += colocarGasolina;
    }

}

let palio = new Carro("Fiat", "Preto", 40);

console.log(palio.gasolinaRest);

palio.dirigir(10);
console.log(palio.gasolinaRest);

palio.abastecer(5);
console.log(palio.gasolinaRest);