// import express from "express";
// import cors from "cors";
// import routes from "./routes.js";
// import mongoose from "mongoose";
// import "dotenv/config";

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();

// Setup mongoose
// try {
//     // await mongoose.connect("mongodb://localhost:27017", {
//     //     dbName: "kings-of-the-balkans"
//     // });

//     await mongoose.connect(process.env.MONGO_URI, {
//         dbName: "kings-of-the-balkans"
//     });

//     console.log("Succesfully connected to DB!");
// } catch (error) {
//     console.error("Cannot connect to BD!");
//     console.error(error.message);
// };

let conn = null;

async function connectDB() {
    if (conn) return conn;

    try {
        conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "kings-of-the-balkans"
        });
        console.log("Connected to DB");
        return conn;
    } catch (err) {
        console.error("DB connection error:", err.message);
        throw err;
    }
}

// Middleware to ensure DB is connected before handling requests
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        res.status(500).json({ error: "Database connection failed" });
    }
});


// Add cors
app.use(cors());

// Add json parser
app.use(express.json());

app.get("/", (req, res) => {
    res.send([]);
});

// Add routes
app.use(routes);

// server.listen(5000, () => console.log("Server is listening on import.meta.env.VITE_APP_SERVER_URL..."))

module.exports = app;