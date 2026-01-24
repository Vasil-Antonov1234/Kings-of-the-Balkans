import Dog from "../models/Dog.js"

export default {
    getAll() {
        return Dog.find();
    },
    getByField(gender) {
        return Dog.find({ gender: gender });
    }
};