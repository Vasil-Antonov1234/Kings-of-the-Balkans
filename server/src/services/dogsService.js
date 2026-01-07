import Dog from "../models/Dog.js"

export default {
    getAll() {
        return Dog.find();
    }
};