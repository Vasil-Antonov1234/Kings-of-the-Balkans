import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

export default function authMiddleware(req, res, next) {
    const accessToken = req.get("X-Authorization");

    try {
        if (!accessToken) {
            throw new Error("Unauthorized!");
        };

        const decodedToken = jwt.verify(accessToken, JWT_SECRET);

        // Attach authenticated user to request
        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (error) {
        res.status(401).json(error.message);
    };
}