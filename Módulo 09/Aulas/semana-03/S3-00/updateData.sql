UPDATE products SET price = 1 WHERE id = 1
RETURNING *;
-- atualização no banco "products" -> na coluna "price" -> no id = 1; // atualizando apenas 1 propriedade

UPDATE products SET ("name", "price") = ROW ('novo pc', 300) WHERE id > 3
RETURNING *;
-- faz a atualização dos recusos solicitados com  os novos nomes selecionados e retorna as propriedades atualizadas !