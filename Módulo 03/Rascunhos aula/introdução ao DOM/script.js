const novoElemento = document.createElement('h1');
const novoElementoText = document.createElement('p');
novoElemento.innerText = 'OLá, Mundo!';
novoElementoText.innerText = 'Esse texto e de exemplo para o paragrafo do h1 a cima !'

const corpo = document.querySelector('body');
corpo.append(novoElemento, novoElementoText)