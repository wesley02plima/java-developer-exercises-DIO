function escrevaNome(name) {
    return "Meu nome é " + name;
}

function verificacaoIdade(idade) {
    if (idade < 18) {
        console.log(escrevaNome("Wesley Pereira") + " e sou menor de idade");
    }
    else {
        console.log(escrevaNome("Wesley Pereira") + " e sou maior de idade");
    }
}


verificacaoIdade(29);

// necessario colocar retorno na primeira função!!!


