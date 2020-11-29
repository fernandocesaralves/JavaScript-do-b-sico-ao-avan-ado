// Verifica se o array tem um determinado elemento

let carros = ["Fiat", "BMW", "Audi", "Renault", "Chevrolet"];

console.log(carros.includes("Fiat"));
console.log(carros.includes("Ford"));

if (carros.includes("Ford")) {
    console.log("Nós temos carros da Fiat");
} else {
    console.log("Não temos essa marca de veículo para vender");
}