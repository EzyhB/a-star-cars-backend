import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

import query from "../../../db";

export default async function getAllCars(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { method } = req;

  if (method === "GET") {
    const data = await query("SELECT * FROM cars ORDER BY created DESC;");

    return {
      status: 200,
      message: "Get all cars operation successful",
      result: res.json(data.rows),
    };
  }
}
