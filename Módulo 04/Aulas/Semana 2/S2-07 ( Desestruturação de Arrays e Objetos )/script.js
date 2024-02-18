function exibirDados({ nome, idade, cidade }) {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Cidade: ${cidade}`);
}

const pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};
const pessoa2 =[1,2,3,4,5]

const {nome, idade , cidade } = pessoa ;

const [um, dois, tres, quatro, cinco] = pessoa2;

// a desestruturação de arrays permite a troca de nomes
// a desestruturação de objetos nao permite a troca de nomes 
// a desestruturação é apenas a colocação de variaveis na mesma ordem dos indices dentro dos obnjetos e dos arrays 
