CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(250) NOT NULL,
    "email" VARCHAR(100) NOT NULL
);

CREATE TABLE addresses2 (
    "id" SERIAL PRIMARY KEY,
    "street" VARCHAR(250) NOT NULL,
    "number" INTEGER,
    "userId" INTEGER NOT NULL,
    FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

-- para criarmos uma table de 1-n, seguiremos o mesmo raciocinio do 1-1. basta tirarmos o UNIQUE do nosso codigo de table e usamos quantos quisermos 