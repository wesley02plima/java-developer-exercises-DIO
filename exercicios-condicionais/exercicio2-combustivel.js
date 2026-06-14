const prompt = require('prompt-sync')();

let combustivelNoCarro = prompt("Combustível que está no carro: ")
let gastoViagem;

if (combustivelNoCarro === "etanol") {

    let precoEtanol = parseFloat(prompt("Preço do etanol por litro: "))
    let gastoMedioCombustivel = parseFloat(prompt("Kilometros por litro com " + combustivelNoCarro + ": "))
    let distanciaViagem = parseFloat(prompt("Distância da viagem em Km: "))

  gastoViagem = precoEtanol * (distanciaViagem / gastoMedioCombustivel)
  console.log("Custo total da viagem: R$" + gastoViagem.toFixed(2) + ".")
}
else if (combustivelNoCarro === "gasolina") {

    let precoGasolina = parseFloat(prompt("Preço da gasolina por litro: "))
    let gastoMedioCombustivel = parseFloat(prompt("Kilometros por litro com " + combustivelNoCarro + ": "))
    let distanciaViagem = parseFloat(prompt("Distância da viagemem Km: "))

    gastoViagem = precoGasolina * (distanciaViagem / gastoMedioCombustivel)
  console.log("Custo total da viagem: R$" + gastoViagem.toFixed(2) + ".")
}   