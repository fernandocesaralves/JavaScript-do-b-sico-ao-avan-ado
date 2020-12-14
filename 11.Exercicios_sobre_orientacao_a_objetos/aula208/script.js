//Crie uma classe conta bancária

// Com as propriedades de saldo na conta corrente, saldo na conta poupança e juros da poupança

// Crie métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente

// Além disso crie uma conta especial que herda da conta normal 

// Na conta especial os juros são drobrados da conta normal

class ContaBancaria {
    constructor(saldoC, saldoP, jurosP) {
        this.saldoC = saldoC;
        this.saldoP = saldoP;
        this.jurosP = jurosP;
    }

    depositarPoupanca(deposito) {
        this.saldoP += deposito;
    }

    depositarCorrente(depositoC) {
        this.saldoC += depositoC;
    }

    sacarPoupanca(saquP) {
        this.saldoP -= saquP;
    }

    sacarCorrente(saquC) {
        this.saldoC -= saquC;
    }

    juros(juros) {
        juros = this.jurosP;
        this.saldoP * juros / 100;
    }

    transferirPouToCorrent(transferencia) {
        this.saldoC += transferencia;
        this.saldoP -= transferencia;
    }

}

let minhaConta = new ContaBancaria(200, 1000, 10);

minhaConta.depositarPoupanca(50);
console.log(minhaConta.saldoP);

minhaConta.depositarCorrente(50);
console.log(minhaConta.saldoC);

minhaConta.sacarPoupanca(100);
console.log(minhaConta.saldoP);

minhaConta.juros(10);
console.log(minhaConta.saldoP);

minhaConta.transferirPouToCorrent(800);
console.log(minhaConta.saldoP);
console.log(minhaConta.saldoC);

