const fs = require("fs/promises");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");

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

app.get("/meals", (req, res) => {
  const filePath = path.join(__dirname, "./data/", "meals.json");

  fs.readFile(filePath, "utf8", (err, jsonData) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return res.status(500).json({ error: "Failed to read data" });
    }
    try {
      const data = JSON.parse(jsonData);
      console.log(data);
      res.json(data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

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
