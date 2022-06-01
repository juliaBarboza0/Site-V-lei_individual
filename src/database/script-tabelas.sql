

CREATE DATABASE uptrainners ;

USE uptrainners;

create table curso (
IdCurso int primary key auto_increment,
nomeCurso varchar (50),
descrição varchar (80),
tipo_bola varchar (30),
valor_mensal decimal (5,2)

);

create table usuario (
cpf char(14) primary key , 
nomeUsuario varchar (50),
sobrenomeUsuario varchar (50),
idade int check (idade >= 18),
telefone char(14),
fkCurso int,
foreign key (fkCurso) references Curso (idCurso)

);

SHOW TABLES;
SELECT * FROM curso ;
SELECT * FROM usuario;
desc usuario;

insert into Curso values (1, 'Adavanced master', 'para pessoas que querem se tornar profissionais', 'bola oficial mikasa', 750.00),
 (2, 'Adavanced ', 'para pessoas que querem se tornar profissionais juvenis', 'bola oficial mikasa', 750.00),
 (3, 'intermediário', 'para pessoas que querem se tornar boas, mas não querem seguir carreira', 'bola oficial mikasa', 650.00),
 (4, 'Básico', 'para pessoas que querem se tornar preparadas e aprenderem o básico', 'bola oficial mikasa mais leve', 450.00);
 