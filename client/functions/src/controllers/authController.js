import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.post("/login", (req, res) => {
    const userData = req.body;

    authService.register(userData);
})

export default authController;