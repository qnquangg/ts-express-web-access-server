import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import pool from "./src/configs/database.config";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  pool.connect().then(() => {
    console.log("Connect database successfully!");
  });

  console.log(`Server is starting at http://localhost:${port}`);
});
