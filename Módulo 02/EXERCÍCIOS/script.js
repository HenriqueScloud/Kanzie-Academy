


let frase = 'o gato foi ao medico. o gato tem dores. o gato tem dentes tortos. o gato tem olhos grandes !'



function trocaDePalavras(palavraAntiga,palavraNova) {

    // console.log(frase)
    frase = frase.replaceAll(palavraAntiga, palavraNova)
    return frase;
}
// console.log(trocaDePalavras('gato','cachorro'))
// console.log(trocaDePalavras('cachorro','rato'))





// exercicio 2

function calcularNotas(nota1, nota2, nota3){
    let notaMedia =  Math.round((nota1 + nota2 + nota3) / 3);
    return notaMedia
}

// console.log(calcularNotas(1.5,8.5,10))


// exercicio 3



function CalculoDaCompra( valorUnitario, quantidade){
    let precoTotal = valorUnitario * quantidade;
    let desconto=0;
    if(quantidade => 5){
        desconto = 10/100* precoTotal
    }
    else if (quantidade => 10){
        desconto = 20/100* precoTotal;
    }
    precoTotal -= desconto
    precoTotal=precoTotal.toFixed(2).replace('.',',')
    console.log(desconto)
    return `O valor total da compra é R$${precoTotal}`
}
console.log(CalculoDaCompra(5.20, 5))

