-- 1. Insira um novo funcionário na tabela sakila.staff.
  
  USE sakila;

  INSERT INTO staff (staff_id, first_name, last_name, address_id, email, store_id, active, username, password, last_update)
  VALUES ('3', 'Gabriela', 'Azevedo', '4', 'gabiazevedoms@gmail.com', '2', '1', 'gabiazevedo', '12345678', '2021-08-20');

-- 2. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione 
  --"Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar.
  -- Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

-- 3. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.

INSERT INTO staff (staff_id, first_name, last_name, address_id, email, store_id, active, username, password, last_update)
VALUES (4, 'Heitor', 'Azevedo', 4, 'heitor.azevedo@gmail.com', 2, 1, 'heitorzinho', '54321', '2020-09-11'),
       (5, 'Edna', 'Souza', 4, 'edinhaazevedo@gmail.com', 2, 1, 'edinha', '78910', '2021-07-21');

-- 4. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .

INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY customer_id
LIMIT 5;

-- 5. Cadastre três categorias de uma vez só na tabela sakila.category.

INSERT INTO category (name)
VALUES ('Thriller'),
('Fiction'),
('For All Family');

-- 6. Cadastre uma nova loja na tabela sakila.store.

INSERT INTO store (manager_staff_id, address_id)
 VALUES (3, 3);

-- 1. Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome 
  -- "JULIA" para "JULES".
UPDATE actor
SET first_name = 'JULIA'
WHERE first_name = 'JULES';

-- 2. Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- 3. Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100
  -- minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.

UPDATE film
SET rental_rate = 25
WHERE length > 100
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;

-- 4. Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes,
  -- com base em sua duração. Para todos os filmes com duração entre 0 e 100,
  -- o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100
  -- passará a ser de $20,00.

  UPDATE film
  SET rental_rate = (
    CASE WHEN length BETWEEN 0 AND 100 THEN 10
         WHEN length > 100 THEN 20
         END
  );

-- 1. Exclua do banco de dados o ator com o nome de "KARL".

SET SQL_SAFE_UPDATES = 0;

SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".

SELECT actor_id
FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

DELETE from film_text
WHERE description LIKE '%saga%';

-- 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.

TRUNCATE film_actor;
TRUNCATE film_category;

-- 5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma.
  -- Use o Table Inspector para fazer isso (aba DDL).
-- Tabela actor - SEM RESTRIÇÕES PARA DELEÇÃO DE DADOS;
-- Tabela address - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela category - SEM RESTRIÇÕES PARA DELEÇÃO DE DADOS;
-- Tabela city - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela country - SEM RESTRIÇÕES PARA DELEÇÃO DE DADOS;
-- Tabela customer - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela film - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela film_actor - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela film_category - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela film_text - SEM RESTRIÇÕES PARA DELEÇÃO DE DADOS;
-- Tabela inventory - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela language - SEM RESTRIÇÕES PARA DELEÇÃO DE DADOS;
-- Tabela payment - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela rental - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela staff - ON DELETE RESTRICT ON UPDATE CASCADE;
-- Tabela store - ON DELETE RESTRICT ON UPDATE CASCADE;

-- Exclua o banco de dados e o recrie (use as instruções no início desta aula).