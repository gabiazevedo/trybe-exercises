-- criação do banco de dados normalization de acordo com a Primeira e Segunda Forma Normais.

CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario (
  funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  numero_telefone VARCHAR(50) NOT NULL,
  data_cadastro DATETIME NOT NULL
) engine=InnoDB;

INSERT INTO funcionario (funcionario_id, nome, sobrenome, email, numero_telefone, data_cadastro)
VALUES (1, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35) 99855-1445', '2020-05-05 08:50:25'),
       (2, 'André', 'Freeman', 'andre1990@gmail.com', '(47) 99522-4996', '2020-02-05 00:00:00'),
       (3, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33) 99855-4669', '2020-05-05 10:55:35'),
       (4, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33) 99200-1556', '2020-05-05 11:45:40');

CREATE TABLE setor (
  setor_id INT PRIMARY KEY AUTO_INCREMENT,
  setor VARCHAR(50) NOT NULL
) engine=InnoDB;

INSERT INTO setor(setor_id, setor)
VALUES (1, 'Administração'),
       (2, 'Vendas'),
       (3, 'Operacional'),
       (4, 'Estratégico'),
       (5, 'Marketing');

CREATE TABLE funcionario_setor (
  funcionario_id INT NOT NULL,
  setor_id INT NOT NULL,
  CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
  FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) engine=InnoDB;

INSERT INTO funcionario_setor (funcionario_id, setor_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (3, 4),
       (3, 2),
       (4, 5);