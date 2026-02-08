// import Picture from "../models/Picture.js"

const Picture = require("../models/Picture.js");

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
        return await Picture.find();
    },

    create(data) {
        return Picture.create(data);
    }
}

module.exports = pictureService;