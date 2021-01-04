// Podemos criar um nó de elemento com o creatElement, e depois inserir no HTML

let lista = document.createElement('ul');


for(i = 5; i < 5; i++) {

    let item = document.createElement('li');

    item.appendChild(texto);

    let texto = document.createTextNode("texto lista" + i);

    lista.appendChild(item);

}

let container = document.getElementById('container-principal');

container.appendChild(lista);