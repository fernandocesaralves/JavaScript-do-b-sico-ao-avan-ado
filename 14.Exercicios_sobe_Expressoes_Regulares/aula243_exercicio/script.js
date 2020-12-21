// Crie uma regex que só aceite strings terminadas com ID

// Depois teste

const confirirID = /\d+[ID]/;

console.log(confirirID.test("08670ID"));
console.log(confirirID.test("ID"));
console.log(confirirID.test("09778654"));