
// Programação orientada a objetos ( POO )

// - class 

class person {
  name: string ='alex'

  falar(nome:string, idade:number){
    console.log(`olá, ${nome}! Eu sou o ${this.name} e tenho ${idade}`);
    
  }
}

const person1 = new person()
person1.falar('henrique', 20)


// - class: CONSTRUCTOR

class Person2 {
  name: string;

  falar(nome:string, idade:number){
    console.log(`olá, ${nome}! Eu sou o ${this.name} e tenho ${idade}`);
  }



  constructor(nome: string){
    this.name = nome
  }
}

const person2 = new Person2('Henrique')

person2.falar("carol", 20);
