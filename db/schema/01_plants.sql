-- Plants Table --

DROP TABLE IF EXISTS plants CASCADE;

CREATE TABLE plants (

  id SERIAL PRIMARY KEY NOT NULL,
  generic_name VARCHAR(255) NOT NULL,
  specific_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  large_plant_card_photo_url VARCHAR(255) NOT NULL,
  when_to_plant VARCHAR(255) NOT NULL,
  water_needs INTEGER NOT NULL,
  sunlight_needs VARCHAR(255) NOT NULL,
  lowest_temp_tolerance INTEGER NOT NULL,
  highest_temp_tolerance INTEGER NOT NULL,
  how_far_apart_to_plant VARCHAR(255) NOT NULL,
  how_deep_to_plant VARCHAR(255),
  how_long_until_mature VARCHAR(255) NOT NULL

);