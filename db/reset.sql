DROP DATABASE IF EXISTS final;
CREATE DATABASE final;

\i ./db/schema/00_create.sql
\i ./db/seeds/00_populate.sql