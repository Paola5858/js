class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(` depósito de r$ ${valor} realizado | novo saldo: r$ ${this.saldo}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(` saldo insuficiente | saldo atual: r$ ${this.saldo}`);
      return;
    }
    this.saldo -= valor;
    console.log(` saque de r$ ${valor} realizado | novo saldo: r$ ${this.saldo}`);
  }

  extrato() {
    console.log(` titular: ${this.titular} | saldo: r$ ${this.saldo}`);
  }
}

const conta = new ContaBancaria("paola");

conta.depositar(100);
conta.depositar(250);
conta.sacar(80);
conta.sacar(500);
conta.extrato();
