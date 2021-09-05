-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais
  -- ( international_sales ) de cada filme.
USE Pixar;

SELECT m.title, s.domestic_sales, s.international_sales
FROM BoxOffice AS s
INNER JOIN Movies AS m
ON s.movie_id = m.id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um
  -- número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT m.title, s.domestic_sales, s.international_sales
FROM BoxOffice AS s
INNER JOIN Movies AS m
ON s.movie_id = m.id
WHERE s.international_sales > s.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem
  -- decrescente.

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem
  -- filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas.
  -- Retorne os nomes dos cinemas em ordem alfabética.

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em
  -- cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em
  -- ordem alfabética.

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM Theater AS t
RIGHT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos
  -- filmes que possuem avaliação maior que 7.5.

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating >  7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos
  -- filmes lançados depois de 2009.

SELECT m.title, b.rating
FROM Movies AS m
INNER JOIN BoxOffice AS b
ON m.id = b.movie_id
WHERE m.year > 2009;

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT name, location FROM Pixar.Theater AS th
WHERE EXISTS (
  SELECT * FROM Pixar.Movies 
  WHERE th.id = theater_id
  );

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT name, location FROM Pixar.Theater AS th
WHERE NOT EXISTS (
  SELECT * FROM Pixar.Movies
  WHERE th.id = theater_id
);

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que
  -- estejam em cartaz.

SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
INNER JOIN Pixar.Theater AS t
ON m.theater_id = t.id
WHERE bo.rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT t1.title, t1.title, t2.title, t2.length_minutes
FROM Pixar.Movies AS t1, Pixar.Movies AS t2
WHERE t1.director = t2.director
AND t1.title != t2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos
  -- filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

-- USANDO INNER JOIN
SELECT m.title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.international_sales >=500000000 AND m.length_minutes > 110;

-- USANDO SUBQUERIE
SELECT m.title FROM Pixar.Movies AS m
WHERE m.id IN (
  SELECT bo.movie_id FROM Pixar.BoxOffice AS bo
  WHERE bo.international_sales >=500000000) AND m.length_minutes > 110;
