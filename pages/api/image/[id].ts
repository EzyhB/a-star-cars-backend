import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import NextCors from "nextjs-cors";

// import multer from "multer";
// import query from "../../../db";
// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import next from "next";

// const port = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const storage = multer.memoryStorage();
// const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// app.prepare().then(() => {
//   const server = express();

//   server.use(cors());

//   server.use(bodyParser.json({ limit: "infinity" }));

//   server.get("/api/image/:id", async (req, res) => {
//     const ID = req.params.toString();

//     const data = await query("SELECT * FROM car_images WHERE Id = $1;", [ID]);

//     return res.status(200).json({
//       message: "Get all car images by ID operation successful",
//       result: data.rows,
//     });
//   });

//   server.post("/api/image/:id", upload.array("images[]"), (req, res) => {
//     // Get the images from the request
//     const images = req.files;

//     // Do something with the images (e.g. save to S3)
//     console.log("Received images:", images);

//     res.json({ success: true, message: "FormData received" });
//   });

//   server.listen(3001, () => {
//     console.log("Express server listening on port 3000");
//   });
// });
// const storage = multer.memoryStorage();
// const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// export default async function getCarByID(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   await NextCors(req, res, {
//     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//     origin: "*",
//     optionsSuccessStatus: 200,
//   });

//   console.log("started");

//   const { method } = req;
//   const { id } = req.query;
//   const ID = id as string;

//   if (method === "GET") {
//     const data = await query("SELECT * FROM car_images WHERE Id = $1;", [ID]);

//     return res.status(200).json({
//       message: "Get all car images by ID operation successful",
//       result: data.rows,
//     });
//   }

//   console.log("before POST");

//   if (method === "POST") {
//     console.log("in POST");

//     if (!(req as any).headers["content-type"].includes("multipart/form-data")) {
//       console.log("Invalid request format, expected multipart/form-data.");

//       return res.status(400).send({
//         message: "Invalid request format, expected multipart/form-data.",
//       });
//     }

//     upload.array("images[]")(req as any, res as any, (error) => {
//       console.log("in upload arrays");

//       if (error) {
//         console.log("err in headers", req.headers);
//         console.log("err in body", req.body);

//         return res.status(400).send({ error });
//       }

//       const { files } = req.body;

//       if (!files) {
//         console.log("no files");

//         return res.status(400).send({ error: "No files were uploaded" });
//       }

//       console.log("Image ID: ", ID);

//       return res.status(200).json({ ID });
//     });
//   }
// }
import multer from "multer";
import query from "../../../db";
import express from "express";
// import cors from "cors";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// router.use(cors());

router.get("/images/:id", async (req, res) => {
  const ID = req.params.toString();

  const data = await query("SELECT * FROM car_images WHERE Id = $1;", [ID]);

  return res.status(200).json({
    message: "Get all car images by ID operation successful",
    result: data.rows,
  });
});

router.post("/images/:id", (req, res) => {
  // Get the images from the request
  const images = req.files;

  // Do something with the images (e.g. save to S3)
  console.log("Received images:", images);

  res.json({ success: true, message: "FormData received" });
});

export default router;
