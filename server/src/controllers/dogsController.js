import { Router } from "express";
import dogsService from "../services/dogsService.js";

const dogsController = Router();

dogsController.get("/males", async (req, res) => {

    // const dogs = await dogsService.getAll();
    const dogs = await dogsService.getByField("Male");

    res.json(dogs || []);
});


export default dogsController;