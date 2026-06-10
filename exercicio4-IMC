const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Digite sua altura: "))
let peso = parseFloat(prompt("Digite seu peso: "))

let imc = peso / (Math.pow(altura,2))

if (imc < 18.5) {
    console.log("IMC: " + imc.toFixed(2))
    console.log("Abaixo do peso.")
}
else if (imc>=18.5 && imc<= 25) {
    console.log("IMC: " + imc.toFixed(2))
    console.log("Peso normal.")
}
else if (imc>25 && imc<= 30) {
    console.log("IMC: " + imc.toFixed(2))
    console.log("Acima do peso.")
}
else if (imc>30 && imc<= 40) {
    console.log("IMC: " + imc.toFixed(2))
    console.log("Obeso.")
}
else if (imc>40) {
    console.log("IMC: " + imc.toFixed(2))
    console.log("Obesidade grave.")
}
