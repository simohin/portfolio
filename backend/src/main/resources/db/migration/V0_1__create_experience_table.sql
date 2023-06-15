CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS experience_item
(
    id                   uuid PRIMARY KEY UNIQUE,
    company_title        text not null,
    company_description  text not null,
    position_title       text not null,
    position_description text not null,
    "from"               date not null,
    "to"                 date
);
