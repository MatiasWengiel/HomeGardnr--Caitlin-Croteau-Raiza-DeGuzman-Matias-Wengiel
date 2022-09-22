-- User Plant Table (A user's plant library) --

DROP TABLE IF EXISTS user_plant CASCADE;

CREATE TABLE user_plant (

  id SERIAL PRIMARY KEY NOT NULL,
  planted_date DATE NOT NULL,
  last_watered_at DATE NOT NULL,
  when_to_water_next DATE NOT NULL,
  high_temperature_notification INTEGER,
  low_temperature_notification INTEGER,
  plant_id INTEGER REFERENCES plants(id) ON DELETE CASCADE

);