/*
  Warnings:

  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlunoInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AlunoInfo" DROP CONSTRAINT "AlunoInfo_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "Questao" DROP CONSTRAINT "Questao_alunoId_fkey";

-- DropTable
DROP TABLE "Aluno";

-- DropTable
DROP TABLE "AlunoInfo";

-- DropTable
DROP TABLE "Questao";

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_categoryToproduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_categoryToproduto_AB_unique" ON "_categoryToproduto"("A", "B");

-- CreateIndex
CREATE INDEX "_categoryToproduto_B_index" ON "_categoryToproduto"("B");

-- AddForeignKey
ALTER TABLE "_categoryToproduto" ADD CONSTRAINT "_categoryToproduto_A_fkey" FOREIGN KEY ("A") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_categoryToproduto" ADD CONSTRAINT "_categoryToproduto_B_fkey" FOREIGN KEY ("B") REFERENCES "produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
