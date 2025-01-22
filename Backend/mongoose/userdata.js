import mongoose, { Mongoose } from "mongoose";

const userdataschema = new mongoose.Schema({
    basicinfo: {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        linkedin: { type: String },
        github: { type: String },
        insta: { type: String },
        telegram: { type: String },
        degree: { type: String, required: true },
        college: { type: String, required: true },
        age: { type: Number, required: true },
        designation: [{ type: String, required: true }],
    },
    skills: [{ domain: { type: String, required: true }, subdomain: { type: String, required: true } }],
    achievements: [{ type: String, required: true }],
    projects: [{
        name: { type: String, required: true },
        desc: { type: String, required: true },
        link: { type: String, required: true },
        techstack: { type: String, required: true }
    }],
    color: { type: String, required: true }
})

export default mongoose.model("userdataschema", userdataschema)