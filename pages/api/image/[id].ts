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

  if (method === "GET") {
    const data = await query("SELECT * FROM car_images WHERE Id = $1;", [ID]);

    return {
      status: 200,
      message: "Get all car images by ID operation successful",
      result: res.json(data.rows),
    };
  }
}
