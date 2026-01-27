import Picture from "../models/Picture.js"

export default {
    async getAll() {
        return await Picture.find();
    }
}