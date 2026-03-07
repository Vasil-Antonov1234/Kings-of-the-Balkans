import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "User name is required!"]
    },
    password: {
        type: String,
        required: [true, "Password is required!"]
    }
})

const User = model("User", userSchema);

export default User;