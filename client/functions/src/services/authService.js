import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

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
    }
}

export default authService;