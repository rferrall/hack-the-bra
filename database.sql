CREATE DATABASE "hack_the_bra";

CREATE TABLE user_account (
    id SERIAL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    password text NOT NULL,
    pronouns text NOT NULL,
    email text NOT NULL
);

CREATE TABLE user_bras (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES user_account(id),
    image_url text,
    brand text,
    size text,
    fitting_details text,
    notes text
);

CREATE TABLE user_measurements (
    id SERIAL PRIMARY KEY,
    userid integer REFERENCES user_account(id),
    name text,
    band_size numeric,
    bust_size numeric,
    description text,
    time timestamp without time zone NOT NULL
);