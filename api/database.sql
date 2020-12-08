CREATE DATABASE recommendations;
CREATE EXTENSION
IF NOT EXISTS "uuid-ossp";


SELECT uuid_generate_v4();

CREATE TABLE users
(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4() UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    member_since TIMESTAMPTZ NOT NULL DEFAULT NOW(),

)


CREATE TABLE recommendation
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY(id) REFERENCES users(id)
)

CREATE TABLE items
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    picture_name varchar(4000),
    links VARCHAR(4000),
    FOREIGN KEY(id) REFERENCES recommendation(id),
    FOREIGN KEY
(id) REFERENCES users
(id)
)

CREATE TABLE follows
(
    id SERIAL PRIMARY KEY,
    follow_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    FOREIGN KEY (id) REFERENCES recommendation(id),
    FOREIGN KEY
(id) REFERENCES users
(id)
)

