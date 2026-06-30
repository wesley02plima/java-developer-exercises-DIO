const { digiteNota } = require('./functions');

let media = digiteNota();

if(media < 5) {
    console.log("Reprovado");
}
else if(media >= 5 && media < 7) {
    console.log("Recuperação");
}    
else if(media >= 7) {
    console.log("Aprovado")
}

