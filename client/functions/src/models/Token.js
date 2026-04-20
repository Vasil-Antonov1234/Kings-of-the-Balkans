import { model, Schema } from "mongoose";

const tokenSchema = new Schema({
    type: {
        type: String
    },
    tokens: {
        type: Array
    }
})

const Token = model("Token", tokenSchema);

export default Token;