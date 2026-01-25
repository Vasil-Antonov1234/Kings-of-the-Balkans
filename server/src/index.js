import express from "express";
import cors from "cors";
import routes from "./routes.js";
import mongoose from "mongoose";

const server = express();

// Setup mongoose
try {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "kings-of-the-balkans"
    });

    console.log("Succesfully connected to DB!");
} catch (error) {
    console.error("Cannot connect to BD!");
    console.error(error.message);
};

// Add cors
server.use(cors());

// Add json parser
server.use(express.json());

server.get("/", (req, res) => {
    res.send([]);
});

// Add routes
server.use(routes);

server.listen(5000, () => console.log("Server is listening on http://localhost:5000..."))