// import { Schema, model } from "mongoose"

const { Schema, model } = require("mongoose");

const pictureSchema = new Schema({
    pictureName: {
        type: String,
        required: [true, "Picture name is required!"],
        minLength: [2, "Name must be at least two characters long!"]
    },
    pictureUrl: {
        type: String,
        required: [true, "Picture url is required!"],
        match: [/^https?:\/\/.+/, "Invalid url!"]
    }

});

const Picture = model("Picture", pictureSchema);

// export default Picture;

module.exports = Picture;