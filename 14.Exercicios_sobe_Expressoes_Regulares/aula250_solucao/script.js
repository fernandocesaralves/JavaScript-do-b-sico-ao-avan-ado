let validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuario.test("fernando_123"));
console.log(validarUsuario.test("as"));
console.log(validarUsuario.test("1111111111111111111111111111"));
console.log(validarUsuario.test("fernando_123-"));