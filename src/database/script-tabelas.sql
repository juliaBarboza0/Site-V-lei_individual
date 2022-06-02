
CREATE DATABASE uptrainners ;

USE uptrainners;

create table curso (
IdCurso int primary key auto_increment,
nomeCurso varchar (50),
descrição varchar (80),
tipo_bola varchar (30),
valor_mensal decimal (5,2)
)auto_increment= 10;

create table usuario (
cpf char(14) primary key , 
nomeUsuario varchar (50),
sobrenomeUsuario varchar (50),
email varchar (50),
senha varchar (50),
idade int check (idade >= 18),
telefone char(14),
fkCurso int,
foreign key (fkCurso) references Curso (idCurso)

);
CREATE TABLE aviso (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
    descricao VARCHAR(150),
fk_usuario char(14),
FOREIGN KEY (fk_usuario) REFERENCES usuario(cpf)
);

create table jogadores (
idJogador int primary key auto_increment,
nome varchar(20),
posição varchar (20)
);

create table votacao (
id int primary key auto_increment,
FkJogador int,
Foreign key (FkJogador) REFERENCES jogadores(IdJogador)
);

SHOW TABLES;
SELECT * FROM curso;
SELECT * FROM usuario;
SELECT * FROM jogadores;
SELECT * FROM votacao;
desc usuario;

insert into Curso values (null, 'Adavanced master', 'para pessoas que querem se tornar profissionais', 'bola oficial mikasa', 750.00),
 (null, 'Adavanced ', 'para pessoas que querem se tornar profissionais juvenis', 'bola oficial mikasa', 750.00),
 (null, 'intermediário', 'para pessoas que querem se tornar boas, mas não querem seguir carreira', 'bola oficial mikasa', 650.00),
 (null, 'Básico', 'para pessoas que querem se tornar preparadas e aprenderem o básico', 'bola oficial mikasa mais leve', 450.00);
 
 insert into jogadores values (null,'Yoandi Leal','oposto'),
 (null,'Ricardo Lucarelli','oposto'),
 (null,'Alan Souza','ponteiro'),
 (null,'Ivan Zaytsev','oposto'),
 (null,'Gabi Guimarães','ponteira'),
 (null,'Macris','levantadora'),
 (null,'Brayelin Martínez','central'),
 (null,'Kim Yeon-Koung','oposta');
 