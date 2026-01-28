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
    },

    async attach(dogId, pictureId) {
        const dog = await Dog.findById(dogId);
        dog.pictures.push(pictureId);

        return dog.save();
    }
}