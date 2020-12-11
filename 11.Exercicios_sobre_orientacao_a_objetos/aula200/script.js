// Crie uma classe que simula uma conta no banco (Utilize a forma que preferir)

// Deve conter a propriedade saldo

// E os métodos deposito e saque

// Teste os métodos 

class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar() {
        console.log("Você depositou na sua conta");
    }

    saquar() {
        console.log("Você sacou da sua conta");
    }

}

let conta = new ContaBancaria(100);

conta.depositar();
conta.saquar();