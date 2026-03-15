import { Router } from "express";
import picturesService from "../services/picturesService.js";
import dogsService from "../services/dogsService.js";
import authMiddleware from "../middlewares/authMiddleware.js";

// const { Router } = require("express");
// const picturesService = require("../services/picturesService.js");
// const dogsService = require("../services/dogsService.js");

const picturesController = Router();

picturesController.get("/", async (req, res) => {
    const pictures = await picturesService.getAll()
    res.json(pictures || []);
});

picturesController.post("/upload", authMiddleware, async (req, res) => {
    const data = req.body;

    try {
        const result = await picturesService.create(data);

        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    };
})

picturesController.post("/:dogId/upload-picture", authMiddleware, async (req, res) => {
    const dogId = req.params.dogId;
    const pictureId = req.body.picture;

    try {
        const result = await dogsService.attach(dogId, pictureId);
        
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    };
})

export default picturesController;

// module.exports = picturesController;