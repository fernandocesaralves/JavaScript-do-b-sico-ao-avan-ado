// Da mesma forma que podemos adicionar eventos, podemos remover quando achamos necessário 

// Para isso utilizamos o método removeEventListener, onde passamos o evento e a função que o evento está escutando 

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg() {
    console.log("Clicou em mim!");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function() {
    btn1.removeEventListener("click", msg);
});

