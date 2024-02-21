// CARRINHO DO COMPRAS 

// Adicionando um item ao carrinho
const item = {
    nome: 'Camiseta',
    preco: 29.99
}; // item do carrinho 


let carrinho = [];
// carinho  vazio, sem nenhum item adicionado ainda


if (localStorage.getItem('carrinho')) {
    carrinho = JSON.parse(localStorage.getItem('carrinho'));
}//verificando se tem algum item no localstorage para adicionar no carrinho criado 




carrinho.push(item);//adicionando item ao array do carrinho 

localStorage.setItem('carrinho', JSON.stringify(carrinho));
//salvando carrinho no localstorage 

// Exibindo os itens do carrinho
let carrinhoExibicao = '';

if (localStorage.getItem('carrinho')) { //verificando se o carrinho existe no banco de dados 
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));//
    carrinho.forEach(item => {
        carrinhoExibicao += `${item.nome} + ' - R$' + ${item.preco.toFixed(2)} + '<br>' `;
    });
}

let carrinho2 = document.querySelector('.carrinho');

carrinho2.innerText = carrinhoExibicao;










// APLICANDO NOTAS FISCAIS 

// Salvando uma nota
const nota = {
    titulo: 'Compras',
    conteudo: 'Leite, pão, manteiga',
    dataCriacao: new Date()

};// NOTA FISCAL



let notas = [];//Banco de notas  fiscais
if (localStorage.getItem('notas')) { // verificando se tem notas no localstorage 
    notas = JSON.parse(localStorage.getItem('notas'));
}
notas.push(nota);//adicionando nota a lista de notas 
localStorage.setItem('notas', JSON.stringify(notas));

// Exibindo as notas
let notasExibicao = '';
if (localStorage.getItem('notas')) {
    const notas = JSON.parse(localStorage.getItem('notas'));
    notas.forEach(nota => {
        notasExibicao += nota.titulo + '<br>' + nota.conteudo + '<br>' + new Date(nota.dataCriacao).toLocaleDateString() + '<br>';
    });
}
document.getElementById('notas').innerHTML = notasExibicao;












//JOGO PROGRESSO


// Salvando o progresso do jogo
const progresso = {
    pontuacao: 1000,
    nivel: 3,
    itensComprados: ['espada', 'escudo']
};// PROGRESSO DO ULTIMO JOGO 




localStorage.setItem('progresso', JSON.stringify(progresso));

// Exibindo o progresso do jogo
if (localStorage.getItem('progresso')) {
    const progresso = JSON.parse(localStorage.getItem('progresso'));
    console.log('Pontuação: ' + progresso.pontuacao);
    console.log('Nível: ' + progresso.nivel);
    console.log('Itens comprados: ' + progresso.itensComprados.join(', '));
}
