import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.send("Working...")
})

server.listen(5000, () => console.log("Server is listening on http://localhost:5000..."))