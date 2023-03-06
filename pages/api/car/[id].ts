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
      "INSERT INTO cars (id, name, sub_name, price, miles, reg, trans, fuel, seats, engine, body_type, exterior_color, drive_type, reg_num, previous_owners, num_of_keys, top_speed, acceleration, power, num_of_images) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)",
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
        el.num_of_images,
      ]
    );

    // const dataImage = await query(
    //   "INSERT INTO car_images (id, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41)",
    //   [
    //     ID,
    //     el.image.image1,
    //     el.image.image2,
    //     el.image.image3,
    //     el.image.image4,
    //     el.image.image5,
    //     el.image.image6,
    //     el.image.image7,
    //     el.image.image8,
    //     el.image.image9,
    //     el.image.image10,
    //     el.image.image11,
    //     el.image.image12,
    //     el.image.image13,
    //     el.image.image14,
    //     el.image.image15,
    //     el.image.image16,
    //     el.image.image17,
    //     el.image.image18,
    //     el.image.image19,
    //     el.image.image20,
    //     el.image.image21,
    //     el.image.image22,
    //     el.image.image23,
    //     el.image.image24,
    //     el.image.image25,
    //     el.image.image26,
    //     el.image.image27,
    //     el.image.image28,
    //     el.image.image29,
    //     el.image.image30,
    //     el.image.image31,
    //     el.image.image32,
    //     el.image.image33,
    //     el.image.image34,
    //     el.image.image35,
    //     el.image.image36,
    //     el.image.image37,
    //     el.image.image38,
    //     el.image.image39,
    //     el.image.image40,
    //   ]
    // );

    return {
      status: 200,
      message: "POST car by ID operation successful",
      result: res.json(data.rows),
    };
  }

  if (method == "DELETE") {
    await query("DELETE FROM cars WHERE id = $1", [ID]);
    await query("DELETE FROM car_images WHERE id = $1", [ID]);
  }
}
