import User from "../models/User.js";
import bcrypt from "bcrypt";

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

    
    }
}

export default authService;