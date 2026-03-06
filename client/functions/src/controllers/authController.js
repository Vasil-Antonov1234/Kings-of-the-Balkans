import { Router } from "express";

const authController = Router();

authController.post("/login", (req, res) => {
    const userData = req.body;

    console.log(userData);
    res.end();
})

export default authController;