MOSTRAR DADOS
SELECT * FROM PESSOA;

INSERE
INSERT INTO PESSOA (nome, nasc) VALUES ('ney','2001-01-01');

ATUALIZA
UPDATE PESSOA SET nome = 'Claudioney' WHERE nome='ney';

EXCLUI
DELETE FROM PESSOA where nome='Claudioney';

CREATE TABLE PESSOA (
id INT auto_increment PRIMARY KEY,
nome varchar(100),
nasc date,
cep varchar (9),
sexo varchar (1),
email varchar(100),
tel varchar (20),
civil varchar (1));

Exercicios
* Adicionar 10 registros diferentes
* Excluir os ids pares
* ter 3 registros do sexo feminino
* ter 2 registros estado civil casado
