-- 1. Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando
  -- as tabelas actor e film_actor.

SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil
ON act.actor_id = fil.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco.
-- Use as tabelas staff e address.

SELECT first_name, last_name, address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem
  -- decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora.
  -- Essas informações podem ser encontradas nas tabelas customer e address.

  SELECT C.customer_id, C.first_name, C.email, A.address_id, A.address
  FROM sakila.customer AS C
  INNER JOIN sakila.address AS A
  ORDER BY C.first_name DESC
  LIMIT 100;

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito
  -- da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas
  -- address e customer.

SELECT C.first_name, C.email, A.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por 
  -- nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas
  -- na tabela address e customer.

SELECT C.first_name, COUNT(A.address) AS clientes_cadastrados
FROM sakila.customer AS C
INNER JOIN sakila.address AS A 
ON A.address_id = C.address_id
WHERE C.active = 1
GROUP BY C.first_name
ORDER BY C.first_name DESC;

-- 6. Monte uma query que exiba o nome, sobrenome e a média de valor ( amount ) paga aos funcionários 
  -- no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e 
  -- sobrenome do funcionário.

SELECT S.first_name, S.last_name, AVG(P.amount) AS employee_amount
FROM sakila.staff AS S 
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(payment_date)=2006
GROUP BY first_name, last_name;

-- 7. Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as 
  -- tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT act.actor_id, act.first_name, fil.film_id, fil.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fa
ON act.actor_id = fa.actor_id
INNER JOIN sakila.film AS fil
ON fil.film_id = fa.film_id;

-- LEFT JOIN --
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- RIGHT JOIN --
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- INNER JOIN --
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
INNER JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- EXEMPLO SELF JOIN --

SELECT t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;


-- 1. Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT T1.film_id, T1.replacement_cost, T2.film_id, T2.replacement_cost
FROM sakila.film AS T1, sakila.film AS T2
WHERE T1.replacement_cost = T2.replacement_cost;

-- 2. Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração 
  -- de empréstimo entre 2 e 4 dias.

SELECT A.title, A.rental_duration, B.title, B.rental_duration
FROM sakila.film AS A, sakila.film AS B
WHERE A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

-- 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor ,
-- exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.

SELECT  first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

-- 2. Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy"
  -- na tabela customer e os que contêm "je" na tabela actor. Exiba apenas os resultados únicos.

SELECT first_name FROM sakila.customer
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM sakila.actor
WHERE first_name LIKE '%je%';

-- 3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco
  -- nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos.
  --Ordene os resultados em ordem alfabética.

(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name;

-- 4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados,
  -- em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página.
  -- Monte uma query que simule esse cenário.

(SELECT first_name, last_name FROM sakila.customer LIMIT 60)
UNION ALL
(SELECT first_name, last_name FROM sakila.actor LIMIT 60)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;