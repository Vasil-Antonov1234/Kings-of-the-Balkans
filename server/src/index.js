import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

server.get("/", (req, res) => {
    res.send("Working...")
})

server.listen(5000, () => console.log("Server is listening on http://localhost:5000..."))