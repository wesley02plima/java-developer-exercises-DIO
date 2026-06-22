const prompt = require('prompt-sync')();


let tabuada = parseInt(prompt("escolha a tabuada: "));

let tabArray = new Array(11);

for (let i=0; i < tabArray.length; i++) {
    let tabResultado = i * tabuada;
    console.log(i + "*" + tabuada + "=" + tabResultado);
    
}


