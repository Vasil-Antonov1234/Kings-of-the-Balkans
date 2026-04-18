import { Router } from "express";
import dogsService from "../services/dogsService.js";
import authMiddleware from "../middlewares/authMiddleware.js";

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
    const { dogId, pictureId } = req.body;

    try {
        const dog = await dogsService.remove(dogId, pictureId);

        res.json(dog);
    } catch (error) {
        res.status(400).json(error.message);
    }

})

dogsController.post("/create", authMiddleware, async (req, res) => {

    const newDogData = req.body;

    try {
        const newDog = await dogsService.create(newDogData);

        res.json(newDog);
    } catch (error) {
        res.status(400).json(error.message);
    };
})

dogsController.put("/:dogId/edit", authMiddleware, async (req, res) => {
    const newDogData = req.body;
    const dogId = req.params.dogId;

    try {
        const newDog = await dogsService.edit(newDogData, dogId);

        res.json(newDog);
    } catch (error) {
        res.status(400).json(error.message);
    };
})

dogsController.delete("/:dogId", authMiddleware, async (req, res) => {
    const dogId = req.params.dogId;

    try {
        const dog = await dogsService.delete(dogId);

        res.status(200).json(dog);
    } catch (error) {
        res.status(404).json(error.message);        
    };

})


export default dogsController;

// module.exports = dogsController;