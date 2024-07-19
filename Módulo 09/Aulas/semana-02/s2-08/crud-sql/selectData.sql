SELECT * FROM products;
-- retorna todas as colunas e seus recursos com os dados necessários.

SELECT "name", "description" from products;
-- retorna as colunas selecionadas

SELECT * FROM products WHERE id > 1;
-- WHERE - operador de filtragem que retorna o resultado de uma logica interna 

SELECT * FROM products WHERE name LIKE 'TOKEN';
-- LIKE - operador que faz uma busca pelas colunas que contenham um determinado valor. (valor identico) 


SELECT * FROM products WHERE name LIKE 'TOKEN%';
-- retorna qualquer valor que contenha "token" em seu nome. (valor que possibilite ter continuidade depois do nome token)



SELECT * FROM products WHERE name LIKE '%TOKEN%';
-- retorna qualquer valor que contenha "token" em seu nome. (valor que possibilite ter continuidade "antes" e "depois" do nome token)



SELECT * FROM products WHERE name ILIKE '%token%';
-- ILIKE - esse recurso nao se importa se o nome esta em maiusculo ou minusculo 