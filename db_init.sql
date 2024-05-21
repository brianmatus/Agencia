drop database if exists agencia;
create database agencia;
use agencia;

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

create table country
(
    id          int auto_increment primary key,
    nombre      VARCHAR(30)   not null,
    description VARCHAR(2000) not null,
    image_src VARCHAR(50) not null
);


insert into country (id, nombre, description, image_src)
values
    (1, 'Guatemala', '¡Bienvenido a Guatemala! Este país centroamericano te sorprenderá con su rica cultura, impresionante naturaleza y coloridos paisajes. Desde las majestuosas ruinas mayas de Tikal hasta los vibrantes mercados de Chichicastenango, Guatemala ofrece una experiencia única llena de historia, tradición y aventura.\n\nDescubre la belleza de sus volcanes, como el majestuoso volcán Tajumulco, el más alto de Centroamérica, o sumérgete en las aguas cristalinas del lago Atitlán, rodeado de pintorescos pueblos indígenas. Disfruta de la exquisita gastronomía guatemalteca, con platos como el pepián, el kak\'ik y el tradicional tamal.\n\nNo te pierdas la oportunidad de explorar las maravillas naturales de Guatemala, desde las selvas tropicales de Petén hasta las impresionantes cascadas de Semuc Champey. Con su cálido clima y gente amable, Guatemala te espera con los brazos abiertos para ofrecerte una experiencia inolvidable.', 'guatemala.jpg'),
    (2, 'El Salvador', '¡Bienvenido a El Salvador! Este pequeño país centroamericano te sorprenderá con su diversidad cultural, hermosas playas y exuberante naturaleza. Desde las olas perfectas para practicar surf en La Libertad hasta las místicas ruinas de Joya de Cerén, El Salvador ofrece una experiencia única llena de historia, tradición y aventura.\n\nExplora la belleza de sus parques nacionales, como el Parque Nacional El Imposible, hogar de una gran variedad de flora y fauna, o disfruta de un día de relax en las tranquilas playas de El Cuco. Prueba la deliciosa gastronomía salvadoreña, con platos como las pupusas, el yuca frita y los refrescantes jugos naturales.\n\nNo te pierdas la oportunidad de descubrir las maravillas naturales y culturales de El Salvador, desde las impresionantes vistas del volcán de Izalco hasta las coloridas fiestas patronales. Con su clima cálido y la hospitalidad de su gente, El Salvador te espera con los brazos abiertos para ofrecerte una experiencia inolvidable.', 'el_salvador.jpg'),
    (3, 'Honduras', '¡Bienvenido a Honduras! Este país centroamericano te sorprenderá con su rica cultura, impresionante naturaleza y coloridos paisajes. Desde las majestuosas ruinas mayas de Copán hasta las paradisíacas playas de Islas de la Bahía, Honduras ofrece una experiencia única llena de historia, tradición y aventura.\n\nExplora la belleza de sus parques nacionales, como el Parque Nacional Pico Bonito, hogar de una gran biodiversidad, o sumérgete en las aguas cristalinas de la segunda barrera coralina más grande del mundo, en las Islas de la Bahía. Disfruta de la exquisita gastronomía hondureña, con platos como el baleada, la sopa de caracol y los deliciosos mariscos frescos.\n\nNo te pierdas la oportunidad de explorar las maravillas naturales de Honduras, desde los densos bosques de La Mosquitia hasta las impresionantes cascadas de Pulhapanzak. Con su clima tropical y la calidez de su gente, Honduras te espera con los brazos abiertos para ofrecerte una experiencia inolvidable.', 'honduras.jpg'),
    (4, 'Nicaragua', '¡Bienvenido a Nicaragua! Con su impresionante belleza natural, rica historia y cultura vibrante, este país centroamericano te cautivará desde el primer momento. Desde los majestuosos volcanes de la cordillera hasta las paradisíacas playas de San Juan del Sur, Nicaragua ofrece una experiencia única llena de aventura y descubrimiento.\n\nExplora la belleza de sus reservas naturales, como el volcán Masaya y la isla de Ometepe, hogar de una gran biodiversidad. Sumérgete en la rica cultura nicaragüense visitando las coloridas ciudades coloniales de León y Granada, o disfruta de la deliciosa gastronomía local, con platos como el vigorón, el gallo pinto y el nacatamal.\n\nNo te pierdas la oportunidad de explorar las maravillas naturales y culturales de Nicaragua, desde las impresionantes cataratas de la Selva Negra hasta las ancestrales ruinas de la ciudad de León Viejo. Con su clima tropical y la calidez de su gente, Nicaragua te espera con los brazos abiertos para ofrecerte una experiencia inolvidable.', 'nicaragua.jpg'),
    (5, 'Costa Rica', '¡Bienvenido a Costa Rica! Con su impresionante biodiversidad, exuberante naturaleza y rica cultura, este país centroamericano te sorprenderá en cada rincón. Desde la belleza de sus parques nacionales hasta la amabilidad de su gente, Costa Rica ofrece una experiencia única llena de aventura y descubrimiento.\n\nExplora la riqueza natural de Costa Rica visitando el Parque Nacional Manuel Antonio, hogar de una gran diversidad de flora y fauna, o aventúrate en la mística selva del Corcovado, considerada una de las áreas protegidas más importantes de América Central. Disfruta de la deliciosa gastronomía costarricense, con platos como el gallo pinto, el casado y los refrescantes batidos de frutas tropicales.\n\nNo te pierdas la oportunidad de descubrir las maravillas naturales y culturales de Costa Rica, desde las impresionantes cataratas de La Fortuna hasta las tranquilas aguas del Río Celeste. Con su clima tropical y la hospitalidad de su gente, Costa Rica te espera con los brazos abiertos para ofrecerte una experiencia inolvidable.', 'costa_rica.jpg'),
    (6, 'Panamá', '¡Bienvenido a Panamá! Con su impresionante diversidad natural, rica historia y vibrante cultura, este país centroamericano te cautivará desde el primer momento. Desde la majestuosidad del Canal de Panamá hasta la belleza de sus paradisíacas playas en Bocas del Toro, Panamá ofrece una experiencia única llena de aventura y descubrimiento.\n\nExplora la exuberante selva tropical del Parque Nacional Soberanía, hogar de una gran variedad de especies de flora y fauna, o aventúrate en la mística región de Chiriquí, conocida por sus impresionantes paisajes y su deliciosa gastronomía. Prueba los sabores de Panamá con platos como el ceviche de corvina, el sancocho y los deliciosos raspados de frutas tropicales.\n\nNo te pierdas la oportunidad de descubrir las maravillas naturales y culturales de Panamá, desde las históricas ruinas de Panamá Viejo hasta las increíbles vistas desde el volcán Barú. Con su clima tropical y la calidez de su gente, Panamá te espera con los brazos abiertos para ofrecerte una experiencia inolvidable.', 'panama.jpg')
    ;


create table reservation
(
    id             int auto_increment,
    origin         int     not null,
    destination    int     not null,
    departure_date DATE    not null,
    return_date    DATE    not null,
    cc_last_digits CHAR(4) not null,
    constraint reservation_pk
        primary key (id)
);

