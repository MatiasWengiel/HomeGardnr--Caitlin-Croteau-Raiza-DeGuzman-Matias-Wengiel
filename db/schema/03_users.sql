-- Users Table --

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (

  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  location_weather_id INTEGER REFERENCES location_weather(id) ON DELETE CASCADE

);