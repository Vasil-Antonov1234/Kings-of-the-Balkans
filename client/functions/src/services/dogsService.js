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
        return await Dog.findById(dogId).populate("pictures");
    },

    async attach(dogId, pictureId) {
        const dog = await Dog.findById(dogId);
        dog.pictures.push(pictureId);
        await pictureService.changeIsAttachedTrue(pictureId);

        return dog.save();
    },

    async remove(dogId, pictureId) {
        const dog = await Dog.findById(dogId);
        await pictureService.changeIsAttachedFalse(pictureId);
        const index = dog.pictures.indexOf(pictureId);
        dog.pictures.splice(index, 1);

        await dog.save();

        return dog;
    },

    async create(newDogData) {
        const dog = await Dog.create(newDogData);

        return dog;
    },

    async edit(newDogData, dogId) {
        
        return Dog.findByIdAndUpdate(dogId, newDogData, { runValidators: true });
    },
    
    async delete(dogId) {
        const dog = await Dog.findById(dogId).populate("pictures");
        const attachedPictures = dog.pictures;

        attachedPictures.forEach(async (x) => await pictureService.changeIsAttachedFalse(x._id))

        await Dog.findByIdAndDelete(dogId);
        
        return `${dog.name} has been deleted!`;
    }
}

// module.exports = dogsService;

export default dogsService;