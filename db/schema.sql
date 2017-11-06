create database burgers_db;

use burgers_db;

create table burgers(
id int(11) auto_increment not null primary key,
burger_name varchar(255) not null,
devourded boolean  default false,
date timestamp not null
);