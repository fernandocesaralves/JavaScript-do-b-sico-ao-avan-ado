const validarID = /\d+ID\b/;

console.log(validarID.test("384284ID"));
console.log(validarID.test("384284"));
console.log(validarID.test("asd"));
console.log(validarID.test("diudhyiduhuID"));
console.log(validarID.test("ID"));
console.log(validarID.test("872984946ID"));