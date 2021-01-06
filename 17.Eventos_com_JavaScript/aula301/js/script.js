// Podemos ativar eventos com a movimentação do mouse também 

// O nome desse evento podemos detectar a posição do ponteiro do mouse na tela 

window.addEventListener("mousemove", function(e) {

    console.log(e.x);
    console.log(e.y);

});
