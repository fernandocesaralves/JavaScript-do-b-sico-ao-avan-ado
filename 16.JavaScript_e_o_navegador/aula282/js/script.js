// Podemos criar um nó de texto puro e inserir em um elemento

let pSemTexto = document.getElementById("sem-text");

let texto = document.createTextNode("Inserir este texto");

pSemTexto.appendChild(texto);