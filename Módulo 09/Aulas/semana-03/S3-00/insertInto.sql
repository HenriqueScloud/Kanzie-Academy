
  -- "id" SERIAL PRIMARY KEY,
  -- "name" VARCHAR(250) NOT NULL, 
  -- "description" TEXT,
  -- "price" INTEGER NOT NULL,
  -- "createdAt" TIMESTAMP NOT NULL,
  -- "upDatedAt" TIMESTAMP NOT NULL


INSERT INTO products ("name","description", "price", "createdAt", "upDatedAt" )
VALUES ('computador', 'dell inspirion 3000', 510000, '2024-07-08','2024-07-08' );

-- inserção simples 



INSERT INTO products ("name","description", "price", "createdAt", "upDatedAt" )
VALUES  ('celular', 'azus 3000', 110000, '2024-07-08','2024-07-08' ),
        ('mouser', 'azus 3000', 10000, '2024-07-08','2024-07-08' ),
        ('monitor', 'azus 3000', 1000000, '2024-07-08','2024-07-08' )


-- inserção composta 


INSERT INTO products ("name","description", "price", "createdAt", "upDatedAt" )
VALUES ('TOKEN PAD', 'dell inspirion 3000', 510000, '2024-07-08','2024-07-08' )
RETURNING * ;


-- aspas duplas para as chaves de coluna 
-- aspas simples para textos de propriedade das colunas. 'henrique'

-- criando cada produto seguindo a "interfae" criada com a função anterior



INSERT INTO employees ("name", "email")
VALUES  ('empregado 1', 'enzo@gmail.com'),
        ('empregado 2', 'valentina@gmail.com'),
        ('empregado 3', 'osvaldo@gmail.com');


-- ==================================================================

INSERT INTO skills ( "name", "employeeId")
VALUES  ('javascript',1 ),
('html',1 ),  
('css',1 );
