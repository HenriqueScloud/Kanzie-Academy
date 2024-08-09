import { prisma } from "./database/prisma";

console.log("OLA MUNDO");

const newStudent = prisma.aluno.create({
  data: {
    // ... data to create a Aluno
  },
});