-- Plants Table --

DROP TABLE IF EXISTS plants CASCADE;

CREATE TABLE plants (
  
  id SERIAL PRIMARY KEY NOT NULL,
  generic_name VARCHAR(255) NOT NULL,
  specific_name VARCHAR(255) NOT NULL,
  thumbnail_photo_url VARCHAR(255) NOT NULL,
  large_plant_card_photo_url VARCHAR(255) NOT NULL,
  when_to_plant VARCHAR(255) NOT NULL,
  water_needs VARCHAR(255) NOT NULL,
  sunlight_needs VARCHAR(255) NOT NULL,
  temperature_thresholds VARCHAR(255) NOT NULL,
  how_far_apart_to_plant VARCHAR(255) NOT NULL,
  how_deep_to_plant VARCHAR(255)
  how_long_until_mature VARCHAR(255) NOT NULL,

);