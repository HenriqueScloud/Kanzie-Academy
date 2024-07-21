DELETE FROM books WHERE name = "Jogos Vorazes";
DELETE FROM authors WHERE name = "J. K. Rowling" RETURNING *;
DELETE FROM authors WHERE name = "Osvaldo Silva" RETURNING *;