const prompt = require('prompt-sync')();

class Carro {
    constructor(marca,cor,distanciaPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.distanciaPorLitro = distanciaPorLitro;
    }
    custoViagem() {
        let precoCombustivel = parseFloat(prompt("Preço do combustível por litro(R$): "));
        let distanciaViagem = parseFloat(prompt("Distância da viagem(KM): "));
        let custoViagem = (distanciaViagem/this.distanciaPorLitro) * precoCombustivel

        console.log("Custo da viagem: R$ " + custoViagem.toFixed(2));
    }
    descricaoCarro() {
        console.log("O carro da marca " + this.marca + " cor " + this.cor + " faz " + this.distanciaPorLitro + "KM por litro.")
    }
}

const meuCarro = new Carro("Volskwagen T-cross","azul",4);
meuCarro.custoViagem(); 
meuCarro.descricaoCarro();






