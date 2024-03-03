import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    number : {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Person = mongoose.model("Person", personSchema);

export default Person;