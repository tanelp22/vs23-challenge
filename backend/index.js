import DataConroller from "./controllers/data.controller.js";
import bodyParser from "body-parser";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", DataConroller.loadMeals());

app.use((req, res) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: "Not found" });
});

const startServer = async () => {
  try {
    app.listen(3001);
    console.log(`Server is running on port 3001.`);
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
};

startServer();
