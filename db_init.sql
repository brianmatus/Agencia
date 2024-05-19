create table user
(
    username        varchar(50) not null primary key,
    hashed_password char(64)    not null,
    nombres         varchar(50) not null,
    apellidos       varchar(50) not null,
    email           varchar(70) not null,
    telefono1       int         not null,
    telefono2       int         not null
);

create table review
(
    id       int          not null auto_increment primary key,
    username varchar(50)  not null,
    comment  varchar(200) not null,
    fecha    date         not null,
    rating   int          not null,
    constraint review_user_username_fk
        foreign key (username) references user (username)
);

