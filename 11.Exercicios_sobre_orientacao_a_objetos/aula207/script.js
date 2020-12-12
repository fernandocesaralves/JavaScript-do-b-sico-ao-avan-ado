class Carro {
    constructor(marca, cor, gasolinaRest, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRest = gasolinaRest;
        this.consumo = consumo;
    }

    dirigir(km) {
        
        let litrosConsumidos = km / this.consumo;

        this.gasolinaRest -= litrosConsumidos;

    }

    abastecer(l) {
        this.gasolinaRest += l;
    }

}

let carro = new Carro("VW", "Cinza", 100, 14);

console.log(carro);

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);
