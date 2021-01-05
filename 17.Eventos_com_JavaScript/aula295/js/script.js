// Quando não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro tem um evento 

// Pode acontecer a propagação, ou seja, o outro elemento ativar um evento tanmbém, aí teremos uma duplicação 

// Por isso temos um método que para esta propagação e resolve este problema, o stopPropagation

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");

function msg(e) {
    console.log("Clicou no botão");
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event);
});

p.addEventListener("click", function() {
    console.log("Clicou no parágrafo");
});


