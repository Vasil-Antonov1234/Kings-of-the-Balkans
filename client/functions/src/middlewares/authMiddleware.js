import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

export default function authMiddleware(req, res, next) {
    const accessToken = req.get("X-Authorization");

    if (!accessToken) {
        throw new Error("Unauthorized!")
    }

    try {
        const decodedToken = jwt.verify(accessToken, JWT_SECRET);
        next();
    } catch (error) {
        res.status(401).json(error.message);
    };
}