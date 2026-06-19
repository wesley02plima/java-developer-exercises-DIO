const prompt = require('prompt-sync')();

class Pessoa {
    constructor(nome, peso, altura,imc,classificacaoImc) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = null;
        this.classificacaoImc = null;
    }
    indiceDeMassaCorporal() {
        this.imc = this.peso / (Math.pow(this.altura,2));
        return this.imc;
    }
    classificarImc() {

        if(this.imc < 18.5) {
            this.classificacaoImc = "estou abaixo do peso"
        }
        else if(this.imc>=18.5 && this.imc<= 25) {
            this.classificacaoImc = "meu peso é normal"
        }
        else if(this.imc>25 && this.imc<= 30) {
            this.classificacaoImc = "estou acima do peso"
        }
        else if(this.imc>30 && this.imc<= 40) {
            this.classificacaoImc = "sou obeso"
        }
        else if(this.imc>40) {
            this.classificacaoImc = "tenho obesidade grave"
        }
        console.log("meu nome é " + this.nome + ", peso " + this.peso + "kg, " + this.altura + "m de altura, meu IMC é " + this.imc.toFixed(2) + " e " + this.classificacaoImc + "."   );
        
        return this.classificacaoImc;
    }
}

const jose = new Pessoa("José", 70, 1.75);
jose.indiceDeMassaCorporal();
jose.classificarImc();


