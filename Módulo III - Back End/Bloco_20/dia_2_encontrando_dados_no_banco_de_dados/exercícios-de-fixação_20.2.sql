-- Monte uma query que exiba seu nome na tela;

SELECT 'Gabriela Azevedo';

-- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

SELECT 'Gabriela', 'Azevedo', 'Rio de Janeiro', 32;

-- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS ,
-- que é chamado de alias na linguagem SQL ( alias é como um apelido no português);

SELECT 'Gabriela' AS nome, 'Azevedo' AS sobrenome, 'Rio de Janeiro' AS 'cidade natal', 32 AS idade;

-- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;

SELECT 13 * 8;

-- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

SELECT NOW() AS 'Data Atual';

-- Usando o banco de dados Sakila

USE sakila;

-- Escreva uma query que selecione todas as colunas da tabela city;

SELECT * FROM city;

-- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;

SELECT first_name, last_name FROM customer;

-- Escreva uma query que exiba todas as colunas da tabela rental;

SELECT * FROM rental;

-- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;

SELECT title, description, release_year FROM film;

-- Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.

SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;

-- Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em
-- apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem
-- legíveis.

SELECT CONCAT(title, ' ', rating) AS Classificação FROM film;


-- Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas,
-- e dê a essa coluna o nome Endereço.

SELECT CONCAT(address, ' ', district) AS Endereço FROM address;

-- Monte uma query para encontrar pares únicos de nomes e idades.

SELECT DISTINCT Nome, Idade FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?

-- R. 5 linhas de resultado. 

-- Monte uma query para encontrar somente os nomes únicos.

SELECT DISTINCT Nome FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?

-- R. 4 linhas de resultado.

-- Monte uma query para encontrar somente as idades únicas.

SELECT DISTINCT Idade FROM Escola.Alunos;

-- Quantas linhas você encontraria na query anterior?

-- R. 4 linhas de resultado.

-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.

SELECT * FROM film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.

SELECT title, release_year, rating FROM film;

-- Quantos filmes temos cadastrados?

SELECT COUNT(*) FROM film;

-- Para os exercícios a seguir, vamos usar a tabela sakila.actor;

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.

SELECT DISTINCT last_name FROM actor;

-- Quantos sobrenomes únicos temos na tabela?

-- R. 123.

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

SELECT * FROM actor
ORDER BY first_name DESC, last_name; 

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.

SELECT * FROM language
LIMIT 5 OFFSET 1;

-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?

SELECT * FROM film;

-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros 
-- filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição.
-- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

SELECT title, release_year, length, rating, replacement_cost FROM film
ORDER BY length DESC, replacement_cost
LIMIT 20;
