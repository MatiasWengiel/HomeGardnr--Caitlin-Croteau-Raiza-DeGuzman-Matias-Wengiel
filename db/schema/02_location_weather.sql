-- Location Weather Table --

DROP TABLE IF EXISTS location_weather CASCADE;

CREATE TABLE location_weather (

  id SERIAL PRIMARY KEY NOT NULL,
  location_name VARCHAR(255) NOT NULL,
  local_warnings VARCHAR(255),
  local_rain VARCHAR(255),
  daily_high INTEGER,
  daily_low INTEGER
  
);