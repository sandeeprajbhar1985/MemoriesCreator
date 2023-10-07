import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/post.js"
import dotenv from 'dotenv';



const app = express(); // use express middlware to connect to application.
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/posts', postRoutes);  

// connect server to database.

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Our server running on port : http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
// Till Above server connected to datbase. will get log server running on port : http://localhost:5000







