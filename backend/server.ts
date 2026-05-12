import express from "express";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Bun + Express!" });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
