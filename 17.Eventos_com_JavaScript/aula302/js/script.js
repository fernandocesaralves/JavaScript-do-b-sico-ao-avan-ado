// Podemos atrelar um evento quando a página carrega, pelo evento load

// E antes do usuário fechar a página pelo evento beforeunload

/*
window.addEventListener("load", function() {
    alert("Assine os nossos termos de uso");
});
*/

window.addEventListener("beforeunload", function(e) {
    event.returnValue = null;
});