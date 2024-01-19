// MODELAGEM

const pessoa = {
    nome: "Henrique",
    anoDeNascimento:2004,
    CPF: 1960484784,
    Cidade: 'Maricá',
    Estado: "Rio de Janeiro",
    Lagradouro: 'Av. Dom Pedrito',
}
const escola = {
    nome:'Dr. João',
    CNPJ: 9876543210,
    ÁreaDeAtuação: "tecnologia",
    Cidade: 'Maricá',
    Estado: "Rio de Janeiro",
    Lagradouro: 'Av. Dom Pedrito',
    curso: 'javaScript',
}

const curso = {
    nome: 'Kenzie Academy',
    duração: '12 meses',
    modalidade: 'Presencial',
    turma: 'M22',
    Módulo: 'M3',
}

const endereço = {
    Cidade: 'Maricá',
    Estado: "Rio de Janeiro",
    Lagradouro: 'Av. Dom Pedrito',
    CEP: 24936640,
}



//Manupulação de estacionamento 

const carro = {  
    placa: "ABC123",   
    classes: ["sedan"],  
    luxo: true,
    potencia: 200, 
    estacionado: true,
    obterPlaca: function(){
        return this.placa;
        },
    verificarClasses: function(){
        return this.classes
        },
    potencialReal: function(){
        if(this.luxo){
            return `O potencial do caro é de ${this.potencia**2}`
        }
        else{
            return `O potencial do caro é de ${this.potencia}`
        }
    },
    adicionarNovaClasse: function(novaClass){
        if ( this.classes.length >=3  ){
            return `Este carro não pode ter mais classes`
        }
        else{
            if (novaClass == 'sedan' || novaClass == 'hatchback' || novaClass == 'suv' || novaClass == 'crossover'||novaClass == 'cupê'){
                if (this.classes.includes(novaClass)){
                    return `A classe "${novaClass}" já existe no carro.`;
                }
                else{
                    this.classes.push(novaClass)
                    return `A classe ${novaClass} foi incluída com sucesso!`;
                }
            }
            else{
                return "Classe inválida. As classes permitidas são: sedan, hatchback, suv, crossover e cupê"
            }
        }
    },
    naoMaisLuxo: function(){
        if(this.estacionado && this.luxo){
            this.luxo=false
            return `O carro ${this.placa} não é mais considerado um carro de luxo`
        }
        if (this.estacionado){
            console.log ( 'o carro esta estacionado !')
        }
        else{
            console.log ( `o carro ${this.placa} não está estacionado !`)
        }
        if (this.luxo){
            console.log ( `o carro é luxuoso!`)
        }
        else{
            console.log ( `O carro ${this.placa} não é luxuoso !`)
        }
    }
}


