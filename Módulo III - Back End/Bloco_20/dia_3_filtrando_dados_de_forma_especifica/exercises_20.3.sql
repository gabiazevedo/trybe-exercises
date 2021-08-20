-- 1. Escreva uma query para exibir todas as peças que começam com GR.

USE PecasFornecedores;

SELECT name FROM Pecas
WHERE name LIKE 'GR%';

-- 2. Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2.
  -- Organize o resultado por ordem alfabética de fornecedor.

SELECT peca, Fornecedor FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- 3. Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.

SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- 4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
  -- Ordene os resultados em ordem alfabética decrescente.

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

-- 5. Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

SELECT COUNT(*) AS fornecedores FROM Fornecedores
WHERE code LIKE '%F%';

-- 6. Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00.
  -- Ordene os resultados por ordem crescente.

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

-- 7. Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.

SELECT COUNT(*) AS 'Vendas feitas entre 15/04/2018 e o dia 30/07/2019' FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';

-- EXERCÍCIOS BÔNUS

-- 1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

USE Scientists;

SELECT * FROM Scientists
WHERE Name LIKE '%e%';

-- 2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A.
  -- Ordene o resultado em ordem alfabética.

SELECT Name FROM Projects
WHERE Code LIKE 'A%'
ORDER BY Name;

-- 3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3.
  -- Ordene o resultado em ordem alfabética.

SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name;

-- 4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.

SELECT Scientist FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

-- 5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.

SELECT * FROM Projects
WHERE Hours > 500;

-- 6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.

SELECT * FROM Projects
WHERE Hours BETWEEN 250 AND 800;

-- 7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.

SELECT Name, Code FROM Projects
WHERE Name NOT LIKE 'A%';

-- 8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

SELECT Name FROM Projects
WHERE Code LIKE '%H%';
