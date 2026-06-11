const prompt = require('prompt-sync')();

let precoEtiqueta = parseFloat(prompt("Preço na etiqueta: "))
let valorFinal
let numeroParcelas
let valorParcelas
let condicaoPagamento = prompt("Forma de pagamento: ")

if (condicaoPagamento === "a vista debito") {
    valorFinal = precoEtiqueta - (precoEtiqueta*0.10)
    console.log("Valor total: R$" + valorFinal)
}

else if (condicaoPagamento === "a vista dinheiro" || condicaoPagamento === "a vista pix") {
    valorFinal = precoEtiqueta - (precoEtiqueta*0.15)
    console.log("Valor total: R$" + valorFinal)
}
else if (condicaoPagamento === "parcelado") {
    let numeroParcelas = parseInt(prompt("Quantas vezes: "))
    if (numeroParcelas <= 2){
        valorFinal = precoEtiqueta
        valorParcelas = precoEtiqueta / numeroParcelas
        console.log("Valor final: R$" + valorFinal)
        console.log("Valor das Parcelas: R$" + valorParcelas)
    }
    else if (numeroParcelas > 2) {
        valorFinal = precoEtiqueta + (precoEtiqueta*0.1)
        valorParcelas = valorFinal / numeroParcelas
        console.log("Juros de 10%.")
        console.log("Valor final: R$" + valorFinal)
        console.log("Valor das Parcelas: R$" + valorParcelas)
    }
}
else {
    console.log("Forma de pagamento não identificada.")
}

