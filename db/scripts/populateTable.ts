import { carDB, carImageDB } from "./dummyData";
import query from "..";

const populateCarTable = async () => {
  carDB.forEach(async (el) => {
    const data = await query(
      "INSERT INTO cars (id, name, sub_name, price, miles, reg, trans, fuel, seats, engine, body_type, exterior_color, drive_type, reg_num, previous_owners, num_of_keys, top_speed, acceleration, power, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)",
      [
        el.id,
        el.name,
        el.subName,
        el.price,
        el.miles,
        el.reg,
        el.trans,
        el.fuel,
        el.seats,
        el.engine,
        el.bodyType,
        el.exteriorColour,
        el.driveType,
        el.regNum,
        el.previousOwners,
        el.numOfKeys,
        el.topSpeed,
        el.acceleration,
        el.power,
      ]
    );
    return data.rows;
  });
};

const populateCarImageTable = async () => {
  carImageDB.forEach(async (el) => {
    const data = await query(
      "INSERT INTO car_images (id, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        el.id,
        el.image1,
        el.image2,
        el.image3,
        el.image4,
        el.image5,
        el.image6,
        el.image7,
        el.image8,
        el.image9,
        el.image10,
        el.image11,
        el.image12,
      ]
    );
  });
};

populateCarTable();
populateCarImageTable();
