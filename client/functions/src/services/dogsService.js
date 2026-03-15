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
        await pictureService.changeIsAttachedTrue(pictureId);

        return dog.save();
    },

    async remove(dogId, pictureUrl) {
        const dog = await Dog.findById(dogId);
        const picture = await pictureService.changeIsAttachedFalse(pictureUrl);
        const pictureId = picture._id;
        const index = dog.pictures.indexOf(pictureId);
        dog.pictures.splice(index, 1);

        dog.save();

        return dog;
    }
}

// module.exports = dogsService;

export default dogsService;