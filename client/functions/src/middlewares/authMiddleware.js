import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";
import authService from "../services/authService.js";

export default async function authMiddleware(req, res, next) {
    const accessToken = req.get("X-Authorization");

    try {
        // Check if the user has accessToken
        if (!accessToken) {
            throw new Error("Unauthorized!");
        };

        // Check if the user is logged out and the accessToken is no longer valid
        const expired = await authService.getExpiredTokens();

        const expiredTokens = expired.tokens;

        const onlyTokens = [];

        expiredTokens.forEach((tokenTime) => onlyTokens.push(tokenTime[0]));

        if (onlyTokens.includes(accessToken)) {
            throw new Error("Unauthorized!");
        };

        // Verify the accessToken
        const decodedToken = jwt.verify(accessToken, JWT_SECRET);

        // Attach authenticated user to request
        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (error) {
        res.status(401).json(error.message);
    };
}