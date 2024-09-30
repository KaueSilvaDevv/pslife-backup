create database if not exists pslife;
use pslife;

create table videogame (
	id int primary key auto_increment,
    nome varchar(10) not null
);

create table generoJogo (
	id int primary key auto_increment,
    nome varchar(30) not null
);

create table periodoDia(
	id int primary key auto_increment,
    nome varchar(10) not null
);

create table usuario(
	id int primary key auto_increment,
    nome varchar(40) not null,
    email varchar(60) not null,
    senha varchar(20) not null,
    fkvideogame int not null,
    fkgeneroFavorito int not null,
    fkperiodoDia int not null,
    
    constraint usuario_videogame_fk foreign key(fkvideogame) references videogame(id),
    constraint usuario_generoFav_fk foreign key(fkgeneroFavorito) references generoJogo(id),
    constraint usuario_periodoDia_fk foreign key(fkperiodoDia) references periodoDia(id)
);

create table metricaUsuarios (
	id int primary key auto_increment,
    fkusuario int not null,
    fkgenero int,
    qtdHoraJogada decimal(4,2),
    fkperiodoDiaJogado int,
    qtdHoraEstudo decimal(4,2),
    dtRegistro timestamp not null default now(),
    
    constraint metricaUsuario_usuario_fk foreign key(fkusuario) references usuario(id),
    constraint metricaUsuario_genero_fk foreign key(fkgenero) references generoJogo(id),
    constraint metricaUsuario_periodoDiaJogado_fk foreign key(fkperiodoDiaJogado) references periodoDia(id)
);

insert into videogame(nome)
values
('PS1'),
('PS2'),
('PSP'),
('PSvita'),
('PS3'),
('PS4'),
('PS5');

insert into generoJogo (Nome) VALUES
('Ação'),
('Aventura'),
('RPG'),
('Esporte'),
('Estratégia'),
('Indie'),
('Puzzle'),
('Terror'),
('Corrida'),
('Luta'),
('Musical'),
('Battle Royale'),
('Plataforma'),
('FPS');

insert into periodoDia(nome)
values
('Manhã'),
('Tarde'),
('Noite'),
('Madrugada');