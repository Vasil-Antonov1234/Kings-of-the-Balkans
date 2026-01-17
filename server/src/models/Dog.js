import { Schema, Types, model } from "mongoose";

const dogSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be at least 2 characters long!"]
    },
    fullName: {
        type: String,
        required: [true, "Full name is required!"],
        minLength: [8, "Full name must be at least 8 characters long!"]
    },
    dateOfBirth: {
        type: String,
        required: [true, "Date of birth is required!"],
        minLength: [10, "Invalid date format!"],
        maxLength: [10, "Invalid date format"]
    },
    parents: {
        type: String
    },
    imageUrl: {
        type: String,
        required: [true, "Image URL is required!"]
    },
    gender: {
        type: String,
        required: [true, "Gender is required!"]
    }
});

const Dog = model("Dog", dogSchema);

export default Dog;