// calcule o gasto de uma viagem utilizando as variáveis: preço do combustível, gasto médio do veículo e distância da viagem.

const prompt = require('prompt-sync')();

let precoCombustivel = parseFloat(prompt("Preço do Combustível por litro: "))
let gastoMedio = parseFloat(prompt("Gasto médio de gasolina por km: "))
let distanciaViagem = parseFloat(prompt("Distância da viagem: "))

let gastoViagem = precoCombustivel * (distanciaViagem / gastoMedio)

console.log("Custo total da viagem: " + gastoViagem.toFixed(2) + ".")


