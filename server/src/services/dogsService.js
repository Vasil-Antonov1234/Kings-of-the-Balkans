import Dog from "../models/Dog.js"

export default {
    async getAll() {
        return await Dog.find();
    },
    
    async getByField(gender) {
        return await Dog.find({ gender: gender });
    },
    
    async getById(dogId) {
        return await Dog.findById(dogId);
    }
}