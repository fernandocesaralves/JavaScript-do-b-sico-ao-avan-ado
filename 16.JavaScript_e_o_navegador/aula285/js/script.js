// Com o JS também é possível verificar propriedades do elemento como altura e largura 

let elemento = document.getElementById('titulo-principal');

console.log('Largura: ' + elemento.offsetWidth); //Considera as bordas
console.log('Altura: ' + elemento.offsetHeight);

console.log('Largura: ' + elemento.clientWidth); // Não considera as bordas
console.log('Altura: ' + elemento.clientHeight); // Não considera as bordas
