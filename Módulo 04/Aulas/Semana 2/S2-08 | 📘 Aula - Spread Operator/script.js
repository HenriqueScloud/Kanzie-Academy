const objeto1 = { nome: "Lucas", idade: 30 };
const objeto2 = { nome2: 'henrique', idade2: 20};
const objeto3 = { ...objeto1, ...objeto2};

console.log(objeto3); 



// Transformando uma string em um array com io spread Operator 

const string = 'javascript';
const arrays1 = [...string]
console.log(arrays1)



// O spread operator ṕe uma sintaxe dentro da desestruturação que permite que o  conteúdo de um array ou propriedades de um objeto sejam espalhado dentro de um outro objeto. podendo criar um objeto com tudo que tem dentro do dois ou mais objetos 


