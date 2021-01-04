// Podemos resgatar o valor de um atributo ou trocar com o js

// Por exemplo o href de um a ou o src de um elemento img 

// getAttribute pega o valor

// setAttribute atualiza o valor

let a = document.querySelector("footer a");

console.log(a.getAttribute('href'));

let link = 'https://www.horadecodar.com.br';

a.setAttribute('href', link);

console.log(a.getAttribute('href'));