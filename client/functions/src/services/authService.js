import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "98asd89uasflmaier7893eirfsdgfdsdavyuilh0ruysjeoaklsdmke";

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

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

        return token;
    }
}

export default authService;