import { ProductList, animal, person, pessoa } from './interfaces';

// CLASS -  CRIANÇÃO DE MODELOS PARA CONSTRUÇÃO

class student {
  name: string;
  module: string;
  grade: any = null;

  constructor(name: string, module: string) {
    this.name = name;
    this.module = module;
  }

  sayHello() {
    console.log(`Olá ! Eu sou o ${this.name} e estou no ${this.module}`);
  }

  setGrade(grade: number) {
    this.grade = grade;
  }

  getGrade() {
    console.log(`a nota do(a) ${this.name} foi ${this.grade}`);
  }
}

const user1 = new student("Henrique", "Módulo 4");
user1.setGrade(0);

// EXTENDS -> CRIANDO VARIAÇÕES DE UMA CLASS JA EXISTENTE !

class liderStudent extends student {
  turma:number
  constructor(name: string, module: string, turma: number) {
    super(name, module)
    this.turma =turma

  }
  
  sayRepresent() {
    console.log(`O ${this.name} é representante da turma: ${this.turma}`);

  }
}

const lider1 = new liderStudent("luiz", "modulo 10", 10);

// lider1.setGrade(10);
// lider1.getGrade();
// lider1.sayRepresent()


// POLIMORFISMO
// o polimorfismo é quando modificamos uma variável dentro do extends.



// PROTECTED/PUBLIC/PRIVATE - PROTEGENDO VARIÁVEIS E MÉTODOS 

class diretor extends liderStudent{
  escola: string = 'colegio evolução '
}


const diretor1 = new diretor('henrique', "modulo 1000", 0)

// console.log(diretor1.escola);




//  Implementação de Interfaces em Classes




const listaItens = new ProductList();

listaItens.addProduct("henrique");
listaItens.addProduct("carol");
listaItens.removeProduct(1)
// listaItens.removeProduct(0);
console.log(listaItens);












