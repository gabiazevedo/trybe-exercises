USE Scientists;

-- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".

SELECT 'This is SQL Exercise, Practice and Solution';

-- Escreva uma query para exibir três números em três colunas.

SELECT 20, 30, 40;

-- Escreva uma query para exibir a soma dos números 10 e 15.

SELECT 10 + 15;

-- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

SELECT (150 + 23) / 10;

-- Escreva uma query para exibir todas as informações de todos os cientistas.

SELECT * FROM Scientists;

-- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

SELECT Name FROM Scientists
ORDER BY Name;

-- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

SELECT Name FROM Projects
ORDER BY Name DESC;

-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.')
FROM Projects;

-- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC
LIMIT 3;

-- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.

SELECT DISTINCT Project FROM AssignedTo;

-- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

SELECT Name, Hours FROM Projects
ORDER BY Hours DESC
LIMIT 1;

-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

SELECT Name, Hours FROM Projects
ORDER BY Hours
LIMIT 1 OFFSET 1;

-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

SELECT Name, Hours FROM Projects
ORDER BY Hours
LIMIT 5;

-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists;

-- EXERCÍCIOS BÔNUS

-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.

USE PiecesProviders;

SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';

-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

-- Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

SELECT Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 2;

-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.

SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.

SELECT COUNT(*) FROM Provides
WHERE Piece = 1; 
