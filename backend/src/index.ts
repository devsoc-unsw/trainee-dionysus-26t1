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


app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});