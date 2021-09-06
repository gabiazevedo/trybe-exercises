USE sakila;

-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de
  -- filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada,
  -- deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

DELIMITER $$

CREATE PROCEDURE ShowTop10Actors()
BEGIN
    SELECT actor_id, COUNT(*) AS 'quantidade de filmes'
    FROM film_actor
    GROUP BY actor_id
    LIMIT 10;
END $$

DELIMITER ;

CALL ShowTop10Actors();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma
  -- string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria
  -- selecionada. Use as tabelas film , film_category e category para montar essa procedure.

DELIMITER $$

CREATE PROCEDURE MostrarCategoriaDoFilme(IN categoria VARCHAR(50))
BEGIN
  SELECT f.film_id, f.title, fc.category_id, c.name
  FROM sakila.film AS f
  INNER JOIN sakila.film_category AS fc
  ON f.film_id = fc.film_id
  INNER JOIN sakila.category AS c
  ON c.category_id = fc.category_id
  WHERE c.name = categoria;
  END $$

DELIMITER ;

CALL MostrarCategoriaDoFilme('Action');

-- 3 .Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente
  -- está ou não ativo, através de um parâmetro de saída.

DELIMITER $$

CREATE PROCEDURE VerificarClienteAtivoOuNão(IN customer_email VARCHAR(100), OUT ativo_ou_nao VARCHAR(100))
BEGIN
  SELECT active INTO ativo_ou_nao
  FROM sakila.customer
  WHERE email = customer_email;
END $$

DELIMITER ;

CALL VerificarClienteAtivoOuNão('MARY.SMITH@sakilacustomer.org', @ativo_ou_nao);
SELECT @ativo_ou_nao;

-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o
  -- momento por um determinado customer_id.

DELIMITER $$

CREATE FUNCTION TotalDePagamentos(cliente INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE total_pagmentos INT;
  SELECT COUNT(amount) FROM sakila.payment
  WHERE customer_id = cliente INTO total_pagmentos;
  RETURN total_pagmentos;
  END $$

  DELIMITER ;
  SELECT TotalDePagamentos(2);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de
  -- inventário com esse id.

DELIMITER $$

CREATE FUNCTION NomeDoFilmeDeAcordoComIdInventario(id_inventario INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
  DECLARE filme_inventario VARCHAR(50);
  SELECT f.title AS 'Nome do Filme'
  FROM sakila.film AS f
  INNER JOIN sakila.inventory AS i
  ON f.film_id = i.film_id
  WHERE i.inventory_id = id_inventario
  INTO filme_inventario;
  RETURN filme_inventario;
  END $$

  DELIMITER ;

SELECT NomeDoFilmeDeAcordoComIdInventario(2);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e
  -- retorna a quantidade total de filmes registrados nessa categoria.

DELIMITER $$

CREATE FUNCTION RetornaQuantidadeDeFilmesPorCategoria(categoria VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_categorias INT;
SELECT COUNT(*) FROM sakila.film_category AS fc
INNER JOIN sakila.category AS c
ON fc.category_id = c.category_id
INNER JOIN sakila.film_category AS f
ON f.film_id = fc.film_id
WHERE c.name = categoria INTO total_categorias;
RETURN total_categorias;
END $$

DELIMITER ;

SELECT RetornaQuantidadeDeFilmesPorCategoria('Horror');

-- 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o
  -- momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.

USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_insert_automoveis
  BEFORE INSERT ON carros 
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'INSERÇÃO',
      NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o
  -- momento do ocorrido e a acao para 'ATUALIZAÇÃO'.

DELIMITER $$

CREATE TRIGGER trigger_update_automoveis
  BEFORE UPDATE ON carros
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;

-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do
  -- tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

DELIMITER $$

CREATE TRIGGER trigger_delete_automoveis
  AFTER DELETE ON carros 
  FOR EACH ROW
BEGIN
  INSERT INTO log_operacoes (tipo_operacao, data_ocorrido)
  VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;
  