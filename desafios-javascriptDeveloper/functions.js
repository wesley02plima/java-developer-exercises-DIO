const prompt = require('prompt-sync')();

function digiteNota() {
    let mediaNota = parseFloat(prompt("Digite a média do aluno: "));
    return mediaNota;
}

module.exports = { digiteNota };
