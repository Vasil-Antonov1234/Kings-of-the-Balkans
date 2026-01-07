import express from "express";
import cors from "cors";
import routes from "./routes.js";

const server = express();

// Setum mongoose

// Add cors
server.use(cors());

// Add routes
server.use(routes);

server.get("/", (req, res) => {
    res.send([]);
});

server.listen(5000, () => console.log("Server is listening on http://localhost:5000..."))