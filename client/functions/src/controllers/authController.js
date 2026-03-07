import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.post("/login", async (req, res) => {
    const userData = req.body;

    // await authService.register(userData);
    const token = await authService.login(userData);

    res.end();
})

export default authController;