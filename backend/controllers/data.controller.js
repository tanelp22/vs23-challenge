import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class DataController {
  static loadMeals() {
    return async (req, res) => {
      try {
        const filePath = path.join(__dirname, "../data/meals.json");
        const jsonData = await fs.readFile(filePath, "utf8");
        const data = JSON.parse(jsonData);
        res.json(data);
      } catch (err) {
        console.error("Error reading/parsing meals.json:", err);
        res.status(500).json({ error: "Failed to load meals" });
      }
    };
  }
}

export default DataController;
