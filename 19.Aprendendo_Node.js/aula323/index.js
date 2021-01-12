// Módulo HTTp 

// Outro módulo muito utilizado, ára fazer comunicação via HTTP

// o módulo já vem com o Node

// Pode criar um servidor que serve páginas web para nós

const {createServer} = require('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"content-type": "text/html"});
    response.write(`
        <h1>Hello World!</h1>
        <p>Primeira página com Node.js    
    `);
    response.end();

});

server.listen(8000);

console.log("Ouvindo a porta 8000");
