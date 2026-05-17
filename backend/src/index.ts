import express from "express";
import cors from "cors";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import cookieparser from 'cookie-parser';

dotenv.config()
// import './db';
// import { User, SleepEntry } from './models/schema';

const app = express();
const port = 8080;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // required for cookies
}))
app.use(express.json());
app.use(cookieparser())

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});

// TODO: Add routes to add users and sleep event things

app.post('/api/signup', (req, res) => {
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
        secure: process.env.NODE_ENV == 'production',
        sameSite: 'strict', // CSRF protection
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.sendStatus(200);
});

app.get('/api/auth/me', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET!);
        res.json(user);
    } catch {
        res.sendStatus(401);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
