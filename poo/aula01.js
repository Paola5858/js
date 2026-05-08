class Personagem {
  constructor(nome, classe, forca) {
    this.nome = nome;
    this.classe = classe;
    this.forca = forca;
    this.vida = 100;
  }

  status() {
    console.log(`  ${this.nome} | classe: ${this.classe} | força: ${this.forca} | vida: ${this.vida}`);
  }
}

const jogador1 = new Personagem("Aragorn", "Guerreiro", 85);
const jogador2 = new Personagem("Gandalf", "Mago", 95);

jogador1.status();
jogador2.status();
