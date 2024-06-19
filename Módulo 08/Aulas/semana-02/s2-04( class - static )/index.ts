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
user1.getGrade();
