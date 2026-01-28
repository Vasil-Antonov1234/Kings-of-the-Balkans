import { Router } from "express";
import picturesService from "../services/picturesService.js";

const picturesController = Router();

picturesController.get("/", async (req, res) => {
    const pictures = await picturesService.getAll()

    res.json(pictures || []);
});

export default picturesController;