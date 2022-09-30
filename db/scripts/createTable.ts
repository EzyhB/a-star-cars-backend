import query from "..";

const carsTable = () => {
  return query(
    "DROP TABLE IF EXISTS cars; CREATE TABLE IF NOT EXISTS cars (id TEXT, name TEXT, sub_name TEXT, image TEXT, price INTEGER, miles INTEGER, reg INTEGER, trans TEXT, fuel TEXT, seats SMALLINT, engine DECIMAL, body_type TEXT, exterior_color TEXT, drive_type TEXT, reg_num TEXT, previous_owners SMALLINT, num_of_keys SMALLINT, top_speed SMALLINT, acceleration DECIMAL, power SMALLINT, created TIMESTAMP NOT NULL DEFAULT NOW())"
  );
};

const carImageTable = () => {
  return query(
    "DROP TABLE IF EXISTS car_images; CREATE TABLE IF NOT EXISTS car_images (id TEXT, image1 TEXT, image2 TEXT, image3 TEXT, image4 TEXT, image5 TEXT, image6 TEXT, image7 TEXT, image8 TEXT, image9 TEXT, image10 TEXT, image11 TEXT, image12 TEXT)"
  );
};

carsTable();

carImageTable();
