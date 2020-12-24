// Além do resolve, há o método reject

// Que é quando determinada lógica não satifaz nosso programa, então podemos ir para outra com o reject, em vez do resolve

// Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then, por exemplo

function vereficarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error(console.log("Falhou")));
        }
    });
}

vereficarNumero(2);
vereficarNumero(3);

