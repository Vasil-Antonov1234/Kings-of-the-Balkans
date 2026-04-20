import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";
import Token from "../models/Token.js";

const authService = {
    async register(userData) {

        return User.create(userData);

    },
    async login(userData) {
        const { username, password } = userData;

        // Validate user
        const user = await User.findOne({ username });

        if (!user) {
            throw new Error("Wrong username or password!");
        };

        // Validate password
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error("Wrong username or password!");
        };

        // Create token
        const payload = {
            id: user.id,
            username: user.username
        }

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

        return token;
    },
    async logout(accessToken) {

        const expired = await Token.findOne({ type: "expired" });
        const expiredTokens = expired.tokens;
        const expirationTime = 3600000;
        const now = new Date().getTime();

        const updatedTokens = expiredTokens.filter((tokenTime) => (now - tokenTime[1]) < expirationTime);

        const onlyTokens = [];

        updatedTokens.forEach((tokenTime) => onlyTokens.push(tokenTime[0]));

        if (!onlyTokens.includes(accessToken)) {
            updatedTokens.push([accessToken, now]);
        }


        const update = { tokens: updatedTokens };

        await Token.findOneAndUpdate({ type: "expired" }, update);

    },
    async getExpiredTokens() {
        const tokens = await Token.findOne({ type: "expired" });

        return tokens;
    }
}

export default authService;