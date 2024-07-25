SELECT * FROM books;

SELECT books.*,categories."name"AS "categoryName"
FROM books 
LEFT JOIN books_categories ON books."id"=books_categories."bookId"
LEFT JOIN categories ON categories."id"=books_categories."categoryId"
WHERE categories."id" = 3;

SELECT books.*, categories."name"AS "categoryName"
FROM books, categories ;

SELECT books."name" AS "bookName", authors.*
FROM books
JOIN authors ON books."authorId" = authors."id"
WHERE books."name" = 'Harry Potter';