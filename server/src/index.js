import express from "express";
import cors from "cors";
import routes from "./routes.js";

const server = express();

// Setum mongoose

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