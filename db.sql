drop database if exists notis;

create database notis;

use notis;

create table notis_usuario(
id int auto_increment primary key,
mensaje varchar(250) not null,
rider varchar(250) not null,
leido boolean
);

tabla riders
tabla proveedores
tabla centro sociales
tabla menus (info menus)
tabla pedidos (id, rider,proveedor,cantidad packs)
tabla favoritos
tabla puntos_entrega
tabla notis_usuario

insert into notis_usuario(id,mensaje,rider,leido) values(null,"Prueba mensaje","rid1",false);

insert into notis_usuario(id,mensaje,rider,leido) values(null,"Prueba mensaje","rid1",false);
