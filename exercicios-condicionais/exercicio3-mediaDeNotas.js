const prompt = require('prompt-sync')();

console.log("Digite as notas do aluno: ")
let primeiraNota = parseFloat(prompt("Primeira nota: "))
let segundaNota = parseFloat(prompt("Segunda nota: "))
let terceiraNota = parseFloat(prompt("Terceira nota: "))

let media = ((primeiraNota + segundaNota + terceiraNota) / 3)

if (media < 5) {
    console.log("Média: " + media.toFixed(2))
    console.log("Aluno reprovado!")
}
else if (media >= 5 && media <= 7) {
    console.log("Média: " + media.toFixed(2))
    console.log("Aluno em recuperação.")
}
else if (media > 7) {
    console.log("Média: " + media.toFixed(2))
    console.log("Passou de semestre!")
}