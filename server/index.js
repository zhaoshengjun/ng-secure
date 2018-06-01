import express from "express";
import jwt from "express-jwt";
import cors from "cors";
import jwks from "jwks-rsa";
import bodyParser from "body-parser";
import { courses } from "./data";

const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
