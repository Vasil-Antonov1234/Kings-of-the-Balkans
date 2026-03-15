import Dog from "../models/Dog.js"
import pictureService from "./picturesService.js";

// const Dog = require("../models/Dog.js");

// export default {
//     async getAll() {
//         return await Dog.find();
//     },
    
//     async getByField(gender) {
//         return await Dog.find({ gender: gender });
//     },
    
//     async getById(dogId) {
//         return Dog.findById(dogId).populate("pictures");
//     },

//     async attach(dogId, pictureId) {
//         const dog = await Dog.findById(dogId);
//         dog.pictures.push(pictureId);

//         return dog.save();
//     }
// }

const dogsService = {
    async getAll() {
        return await Dog.find();
    },
    
    async getByField(gender) {
        return await Dog.find({ gender: gender });
    },
    
    async getById(dogId) {
        return Dog.findById(dogId).populate("pictures");
    },

    async attach(dogId, pictureId) {
        const dog = await Dog.findById(dogId);
        dog.pictures.push(pictureId);
        await pictureService.changeIsAttached(pictureId);

        return dog.save();
    }
}

// module.exports = dogsService;

export default dogsService;