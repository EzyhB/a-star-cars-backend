import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

import query from "../../../db";

export default async function getCarByID(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;
  const { id } = req.query;
  const ID = id as string;
  const el = req.body;

  if (method === "GET") {
    const data = await query("SELECT * FROM cars WHERE Id = $1;", [ID]);

    return {
      status: 200,
      message: "Get car by ID operation successful",
      result: res.json(data.rows),
    };
  }

  if (method === "POST") {
    console.log(el);

    const data = await query(
      "INSERT INTO cars (id, name, sub_name, price, miles, reg, trans, fuel, seats, engine, body_type, exterior_color, drive_type, reg_num, previous_owners, num_of_keys, top_speed, acceleration, power, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)",
      [
        ID,
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
        el.image.image1,
      ]
    );

    const dataImage = await query(
      "INSERT INTO car_images (id, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        ID,
        el.image.image1,
        el.image.image2,
        el.image.image3,
        el.image.image4,
        el.image.image5,
        el.image.image6,
        el.image.image7,
        el.image.image8,
        el.image.image9,
        el.image.image10,
        el.image.image11,
        el.image.image12,
      ]
    );

    return {
      status: 200,
      message: "POST car by ID operation successful",
      result: res.json(data.rows),
    };
  }
}
