// Crie uma regex que valide nome de usuários no sistema

// Aceita letras de a-z, _e-, números de 0-9, mínimo de 3 caracteres e máximo de 16

// Depois teste

let validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarUsuario.test("fernando_123"));
console.log(validarUsuario.test("as"));
console.log(validarUsuario.test("1111111111111111111111111111"));
console.log(validarUsuario.test("fernando_123-"));