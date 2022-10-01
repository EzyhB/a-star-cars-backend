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

  const params = req.query;

  const name = params.name ? (`%${params.name}%` as string) : "%%";
  const trans = params.trans ? (`%${params.trans}%` as string) : "%%";
  const reg = params.reg ? (params.reg as string) : 0;

  if (method === "GET") {
    const data = await query(
      "SELECT * FROM cars WHERE name ILIKE $1 AND trans ILIKE $2 AND reg >= $3;",
      [name, trans, reg]
    );

    return {
      status: 200,
      message: "Get all cars operation successful",
      result: res.json(data.rows),
    };
  }
}
