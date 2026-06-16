const prompt = require('prompt-sync')();

function aplicarDesconto (valor, desconto) {
    return valor - (valor*(desconto/100));
}

function aplicarJuros (valor, juros) {
    return valor + (valor*(juros/100));
}

function parcelar(valor, parcela) {
    if(parcela > 2) {
        let valorComJuros = aplicarJuros(valor, 10);
        let valorParcela = valorComJuros/parcela;
        console.log("Valor total: R$ " + valorComJuros.toFixed(2));
        console.log("Valor da parcela: R$ " + valorParcela.toFixed(2));
    }
    else if (parcela <= 2) {
        let valorDaParcela = valor / parcela;
        console.log("Valor total: R$ " + valor.toFixed(2));
        console.log("Valor da parcela: R$ " + valorDaParcela.toFixed(2));
    }
    return;
}

function valorParcela(valor,parcela) {
    return valor / parcela;
}

let condicaoPagamento = prompt("Forma de pagamento: ")
let precoEtiqueta = parseFloat(prompt("Preço na etiqueta: "))
let numeroParcelas;



if (condicaoPagamento === "a vista debito") {
    console.log("R$ " + aplicarDesconto(precoEtiqueta, 10));
    console.log("Desconto de 10%.");
    console.log("Valor total: R$" + aplicarDesconto(precoEtiqueta, 10));
}

else if (condicaoPagamento === "a vista dinheiro" || condicaoPagamento === "a vista pix") {
    console.log("R$ " + aplicarDesconto(precoEtiqueta, 15)); 
    console.log("desconto de 15%.")
    console.log("Valor total: R$" + aplicarDesconto(precoEtiqueta, 15))
}
else if (condicaoPagamento === "parcelado") {
    let numeroParcelas = parseInt(prompt("Quantas vezes: "))
    parcelar(precoEtiqueta, numeroParcelas);
}
else {
    console.log("Forma de pagamento não identificada.")
}

