CREATE VIEW film_with_categories AS
SELECT f.title, fc.category_id, c.name
FROM sakila.category AS c 
INNER JOIN sakila.film_category AS fc
ON c.category_id = fc.category_id
INNER JOIN sakila.film AS f
ON fc.film_id = f.film_id
ORDER BY f.title;

SELECT * FROM film_with_categories;

CREATE VIEW film_info AS
SELECT fa.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON fa.actor_id = a.actor_id
INNER JOIN sakila.film AS f
ON f.film_id = fa.film_id
ORDER BY `actor`;

SELECT * FROM film_info;

CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM sakila.address AS a
INNER JOIN sakila.city AS c
ON a.city_id = c.city_id
ORDER BY c.city;

SELECT * FROM address_info;

CREATE VIEW movies_languages AS
SELECT f.title, l.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id
ORDER BY f.title;

SELECT * FROM movies_languages;

-- 1. Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para
-- address , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations CHANGE street_address address VARCHAR(40);

-- 2. Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o 
-- mesmo tipo e tamanho de dados.

ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25);

-- 3. Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o 
-- mesmo tipo e tamanho de dados.

ALTER TABLE countries CHANGE country_name country VARCHAR(40);