import { Router } from "express";
import dogsService from "../services/dogsService.js";

const dogsController = Router();

dogsController.get("/", async (req, res) => {

    const dogs = await dogsService.getAll();

    res.json(dogs || []);
});


export default dogsController;