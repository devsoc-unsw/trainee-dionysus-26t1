import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

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

app.post('/api/login/signup', (req, res) => {
    // TODO: create a user in DB (once DB is set up)

    const token = jwt.sign(
        { username: req.body.username, email: req.body.email },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
    );
    res.json({ token });
});
