import express from "express";
import cors from "cors";
import './db';
// import { User, SleepEntry } from './models/schema';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});

// TODO: Add routes to add users and sleep event things

app.post('/api/login/signup', (req, res) => {
    // TODO: create a user in DB (once DB is set up)
    console.log(req.body.username)
    console.log(req.body.email)

    const token = jwt.sign(
        { username: req.body.username, email: req.body.email },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
    );

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,       // HTTPS only
        sameSite: 'strict', // CSRF protection
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
