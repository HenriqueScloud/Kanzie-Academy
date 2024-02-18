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

exibirDados(pessoa);

function exibirDados({ nome, idade, cidade }) {
    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Cidade: ${cidade}`);
}

    const pessoa2 = {
    nome: 'João',
    idade: 30,
    cidade: 'São Paulo'
};

exibirDados(pessoa2);
    const novaPessoa2 = (nome,idade)=>{
        return `ola eu sou o(a) ${nome}, tenho ${idade} anos`
}