import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.post("/login", async (req, res) => {
    const userData = req.body;

    // await authService.register(userData);
    // res.end();
    
    try {
        
        const token = await authService.login(userData);
    
        // Attach token to cookie
        // res.cookie("auth", token);
        res.json({auth: "auth", token});
    } catch (error) {
        res.status(400)
        res.send(JSON.stringify(error.message))
    }
    
})

export default authController;