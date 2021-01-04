// Podemos também mudar as propriedades de estilo dos elementos do HTML com o JS

// Acessando a propriedade style podemos fazer as modificações

// O estilo é manipulado direto na tag, ou seja, substitui o do CSS (na maioria das vezes)

let elemento = document.querySelector('#titulo-principal');

setTimeout(function() {
    elemento.style.color = 'red';
    elemento.style.backgroundColor = '#000';
    elemento.style.width = '50%';
}, 4000);

