import { Router } from "express";
import dogsService from "../services/dogsService.js";

// const { Router } = require("express");
// const dogsService = require("../services/dogsService.js");

const dogsController = Router();

dogsController.get("/males", async (req, res) => {

    const dogs = await dogsService.getByField("Male");

    res.json(dogs || []);
});

dogsController.get("/females", async (req, res) => {

    try {
        const dogs = await dogsService.getByField("Female");

        res.json(dogs || []);
    } catch (error) {
        res.status(400);
        res.json(error.message);
    };
});

dogsController.get("/puppies", async (req, res) => {

    try {
    const dogs = await dogsService.getByField("Puppy");

    res.json(dogs || []);
    } catch (error) {
        res.status(400)
        res.json(error.message);        
    };
});

dogsController.get("/:dogId/details", async (req, res) => {
    const dogId = req.params.dogId;

    try {
        const dog = await dogsService.getById(dogId);

        res.json(dog);
    } catch (error) {
        res.status(400);
        res.json(error.message);
    };
});

dogsController.post("/remove-attached-picture", async (req, res) => {
    const { dogId, pictureUrl } = req.body;

    const dog = await dogsService.remove(dogId, pictureUrl);

    res.json(dog);
})


export default dogsController;

// module.exports = dogsController;