// Com o método all, podemos resolver várias promessas de uma vez só

// Ou seja, passamos ela por um array e quando a última for resolvida, recebemos a resposta 

const p1 = new Promise(function(resolve, reject) {
   setTimeout(function() {
    resolve(15);
   }, 5000); 
});

const p2 = Promise.resolve(12);

const p3 = new Promise((resolve, reject) => {
    resolve(10);
});

Promise.all([p1,p2,p3]).then((value) => console.log(value));

