// Imprima no console cada numero do array elevado ao quadrado 
const numeros = [1, 2, 3, 4, 5];
// Seu código 
function aoQuadrado(){
    numeros.forEach((item)=> console.log(item * item))
}
//aoQuadrado();





// crie um novo array com o cumprimento de cada nome do array 
const nomes = ['Alice', 'Bob', 'Charlie', 'David'];

// Seu código aqui

function numCaractere(){
    nomes.map((item) => console.log(`o item ${item} tem ${item.length} caracteres.`))
}
//numCaractere();



//crie um novo array contendo apenas os numeros pares do array abaixo 

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Seu código aqui
function numPares(){
    const numeros2Atualizado = numeros2.filter(item=>item%2==0)
    console.log(numeros2Atualizado) // tem que criar uma nova variavel para conter os 
    //novos elementos de dentro do filter criado pelo array.

}
//numPares();


//encontre a primeira palavra com mais de 5 letras do array abaixo 
const palavras = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];

// Seu código aqui


function primeiraPalavra(){
    const primeiraP = palavras.find(item => item.length>5)
    console.log(primeiraP)
}
//primeiraPalavra();




// calcule a soma de todos os numero do array abaixo !
let numeros3 = [1, 2, 3, 4, 5];

// Seu código aqui

numeros3 = numeros3.reduce((contador,item) => {
    return contador += item;
},0);
console.log(numeros3)