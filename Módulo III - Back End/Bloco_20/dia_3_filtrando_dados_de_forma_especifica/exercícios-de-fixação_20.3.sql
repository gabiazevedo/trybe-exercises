-- G = permitido para todos
-- PG = permitido para crianças menores de 13 anos
-- PG-13 = permitido para pessoas com mais de 13 anos
-- R = permitido para pessoas com mais de 17 anos
-- NC-17 = permitido apenas para adultos

USE sakila;

SELECT  *
FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT  first_name
FROM customer
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE active = 1 AND store_id = 1;

SELECT * FROM customer 
WHERE active != 1 AND store_id = 1;

SELECT title, rating, rental_rate FROM film
WHERE rating = 'NC-17' 
ORDER BY rental_rate, title
LIMIT 50;

SELECT * FROM film 
WHERE title LIKE '%ace%';

SELECT * FROM film 
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT title FROM film
WHERE title LIKE '___gon%';

SELECT title, description FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT title FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT description FROM film
WHERE description LIKE '%monkey%' and description LIKE '%sumo%';

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;

SELECT COUNT(*) quantidade_de_pagmentos FROM payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM film
WHERE rating IN ('G', 'PG','PG-13')
ORDER BY title
LIMIT 500;

SELECT COUNT(*) AS pagamentos FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) AS pagamentos FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano,
MONTH(rental_date) AS Mês,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >=22; 


