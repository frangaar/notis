drop database if exists notis;

create database notis;

use notis;

create table notis_usuario(
id int auto_increment primary key,
mensaje varchar(250) not null,
rider varchar(250) not null,
leido boolean
);

insert into notis_usuario(id,mensaje,rider,leido) values(null,"Prueba mensaje","rid1",false);

insert into notis_usuario(id,mensaje,rider,leido) values(null,"Prueba mensaje","rid1",false);