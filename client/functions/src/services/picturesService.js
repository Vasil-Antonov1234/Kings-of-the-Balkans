import Picture from "../models/Picture.js"

// const Picture = require("../models/Picture.js");

// export default {
//     async getAll() {
//         return await Picture.find();
//     },

//     create(data) {
//         return Picture.create(data);
//     }
// }

const pictureService = {
    async getAll() {
        return (await Picture.find()).filter((pic) => pic.isAttached === false);
    },

    create(data) {
        data.isAttached = false;
        
        return Picture.create(data);
    },

    async changeIsAttachedTrue(pictureId) {
        return await Picture.findByIdAndUpdate(pictureId, { isAttached: true });
    },

    async changeIsAttachedFalse(pictureId) {
        const picture =  await Picture.findByIdAndUpdate(pictureId, { isAttached: false })
        
        return picture;
    }
}

// module.exports = pictureService;

export default pictureService;