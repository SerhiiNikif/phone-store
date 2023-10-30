import mongoose from "mongoose";
const {Schema, model} = mongoose;

const phoneSchema = new Schema({
    title: {type: String, required: true},
    imageUrl: {type: String, required: true},
    types: {type: Array, required: true},
    sizes: {type: Array, required: true},
    price: {type: Number, required: true},
    category: {type: Number, required: true},
    rating: {type: Number, required: true},
}, {timestamps: true});

const Phone = model("Phone", phoneSchema);

export default Phone;
