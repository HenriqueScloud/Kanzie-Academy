CREATE TABLE users(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL ,
  "email" VARCHAR(255) NOT NULL,
)

CREATE TABLE address (
  "id" SERIAL PRIMARY KEY,
  "street" VARCHAR(255) NOT NULL,
  "number" INTEGER,
  "userId" INTEGER UNIQUE NOT NULL,
  FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE,
)


-- PARA SIMPLIFICAR ESSE COD. 

-- FOREIGN KEY () = ESSA CHAVE...
-- REFERENCES users() = CHAVE QUE SERÁ REFERENCIA DA FOREIGN KEY
-- ON DELETE CASCADE = a chave foreign key so existira caso a chave de referencia exista, caso contrario ela sera excluida !




INSERT INTO users ("name", "email") VALUES ('HENRIQUE', 'HENRIQUE@GMAIL.COM');
INSERT INTO address ("street", "number", "userId") VALUES ('rua exemplo',123, 2);