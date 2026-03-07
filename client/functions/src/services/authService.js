import User from "../models/User.js";

const authService = {
    async register(userData) {
        
        return User.create(userData);

    }
}

export default authService;