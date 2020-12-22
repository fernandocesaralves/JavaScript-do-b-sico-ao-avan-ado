const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Fernando"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("1234"));
console.log(validaMarca.test("Marca: Puma"));

