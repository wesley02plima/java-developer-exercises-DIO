function Numeros () {
  return  [5,50,10,98,23];
}

function maiorNumero() {
    let listaNumeros = Numeros();
    let maior = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > maior) {
            maior = listaNumeros[i]
        } 
    }
    console.log(maior);
    return maior;
}

module.exports = { maiorNumero };

