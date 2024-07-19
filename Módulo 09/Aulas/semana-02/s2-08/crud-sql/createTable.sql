CREATE TABLE products (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL, 
  "description" TEXT,
  "price" INTEGER NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "upDatedAt" TIMESTAMP NOT NULL
);
-- criando um tipo de interface para a criação dos produtos 

CREATE TABLE users (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NOT NULL, 
  "description" TEXT,
  "email" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "upDatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE pedidos (
  "id" SERIAL PRIMARY KEY,
  "user" VARCHAR(250) NOT NULL, 
  "description" TEXT,
  "priceTot" INTEGER NOT NULL,
  "createdAt" TIMESTAMP NOT NULL,
  "upDatedAt" TIMESTAMP NOT NULL
);

CREATE TABLE alunos (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(150)  NOT NULL,
  "email" VARCHAR(250) NOT NULL,
  "module" VARCHAR(2) NOT NULL,
  "score" INTEGER NOT NULL,
  "active" BOOLEAN NOT NULL
);