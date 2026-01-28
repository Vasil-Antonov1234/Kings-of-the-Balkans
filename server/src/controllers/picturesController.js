import { Router } from "express";
import picturesService from "../services/picturesService.js";

const picturesController = Router();

picturesController.get("/", async (req, res) => {
    const pictures = await picturesService.getAll()
    res.json(pictures || []);
});

picturesController.post("/upload", async (req, res) => {
    const data = req.body;

    try {
        const result = await picturesService.create(data);

        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    };
})

export default picturesController;