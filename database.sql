CREATE DATABASE "hack_the_bra";

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE user_account (
    id SERIAL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password text NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX user_account_pkey ON user_account(id int4_ops);
CREATE UNIQUE INDEX user_account_username_key ON user_account(username text_ops);




CREATE TABLE user_bras (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES user_account(id),
    image_url text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX user_bras_pkey ON user_bras(id int4_ops);

CREATE TABLE user_measurements (
    id SERIAL PRIMARY KEY,
    userid integer REFERENCES user_account(id),
    name text,
    band_size numeric,
    bust_size numeric,
    description text,
    time timestamp without time zone NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX user_measurements_pkey ON user_measurements(id int4_ops);