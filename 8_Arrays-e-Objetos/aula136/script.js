// Podemos copiar todas as propriedades de um obj para outro;

let carro = {
   portas: 4,
   portamalas: '200 litros',
   motor: '2.0',
}

let adicionais = {
   tetosolar: true,
   arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);