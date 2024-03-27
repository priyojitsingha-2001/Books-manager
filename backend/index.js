import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import BookRoute from './routes/Books.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/Bookstore")
    .then(() => {
        console.log("Connected to the Datacase");
        app.listen(PORT, () => {
            console.log(`server running at http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.log(error.message);
    });

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the MERN application");
});

// books route
app.use("/books", BookRoute);




