// export interface animal {
//   name: string;
// }

// export interface IproductList {
//   productList: string[];
//   getPorduct(): void;
//   addProduct(product: string): void;
//   removeProduct(index: number): void;
// } // criando um mapa para a criação da class

// export class ProductList implements IproductList {
//   productList: string[] = ['luiza'];

//   getPorduct() {
//     this.productList.forEach((item: string): void => console.log(item));
//   }

//   addProduct(product: string): void {
//     this.productList.push(product);
//   }

//   removeProduct(index: number): void {
//     if (index >= 0 && index < this.productList.length) {
//       this.productList.splice(index, 1);
//     } else {
//       console.error("Índice fora do intervalo");
//     }
//   }

//   // name: string;

//   // constructor(nome: string) {
//   //   this.name = nome;
//   // }
// } // criando a class para a construção do objeto

// // NOVO EXEMPLO

// export interface pessoa {
//   name: string;
//   age: number;
//   falar(): void;
//   ler(): void;
// }

// export class person implements pessoa {
//   name: string;
//   age: number;

//   constructor(nome: string, idade: number) {
//     this.name = nome;
//     this.age = idade;
//   }

//   falar(): void {
//     console.log(`ola ${this.name} vc tem ${this.age} anos `);
//   }

//   ler(): void {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }
