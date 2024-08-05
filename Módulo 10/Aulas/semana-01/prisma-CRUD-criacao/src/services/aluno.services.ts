// import { Aluno } from "@prisma/client";
// import { prisma } from "../database/prisma";

// export class alunoServices {
//   // criação unica de item 
//   async create(alunoEmail:string, alunoName:string) {
//     return await prisma.aluno.create({
//       data: { email: alunoEmail, name: alunoName }
//     });
//   }
//   // criação multipla de itens 
//   async createMany(alunosCadastres: Aluno[]){

//     const alunos = alunosCadastres.map(aluno=>({id: aluno.id, email:aluno.email, name:aluno.name}))



//     return await prisma.aluno.createMany({
//       data: alunos
//     })
//   }
//   async delete(id: number) {
//     //
//   }
// }
