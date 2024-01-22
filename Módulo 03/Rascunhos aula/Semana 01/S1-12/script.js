let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado',
}

function verificador(Name,CPF){
    let name = Name;
    name = name[0].toUpperCase() + name.slice(1);
    if (ganhador.nome == name && ganhador.cpf == CPF){
        return `O ${ganhador.nome}, com o CPF ${ganhador.cpf} é ganhador do prêmio !!!`
    }
    return "Não é ganhador !"
}