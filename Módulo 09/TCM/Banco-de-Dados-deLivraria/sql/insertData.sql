
INSERT INTO authors ("name","bio")
VALUES  ('Eiichiro Oda','Eiichiro Oda em um mangaká conhecido pela criação do mangá One Piece.'),
        ('J. K. Rowling','J. K. Rowling é uma escritora, roteirista e produtora cinematográfica britânica, notória por escrever a série de livros Harry Potter.'),
        ('Osvaldo Silva','Autor e compositor brasileiro.') RETURNING *;
INSERT INTO books ("name", "pages", "createdAt", "updatedAt", "authorId")
VALUES
('Harry Potter', 325, '2024-07-19', '2024-07-19', 2),
('Jogos Vorazes', 276, '2024-07-19', '2024-07-19', NULL),
('One Piece - Volume 1', 120, '2024-07-19', '2024-07-19', NULL),
('One Piece - Volume 2', 137, '2024-07-19', '2024-07-19', NULL)
RETURNING *;
INSERT INTO categories ("name", "createdAt", "updatedAt")
VALUES 
('manga', '2024-07-19', '2024-07-19'),
('aventura', '2024-07-19', '2024-07-19'),
('fantasia', '2024-07-19', '2024-07-19')
RETURNING *;
INSERT INTO books_categories ("bookId", "categoryId")
VALUES 
( 2 , 1 ),
( 2 , 2 ),
( 2 , 3 ),
( 2 , 4 ),
( 3 , 1 ),
( 3 , 3 ),
( 3 , 4 ),
( 1 , 3 ),
( 1 , 4 ) RETURNING *;
INSERT INTO contact_infos ("phone", "email", "authorId")
VALUES 
('(44) 99123-4567', 'osvaldo@osvaldocompany.com', 3)
RETURNING *;

