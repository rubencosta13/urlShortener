import mongoose from "mongoose";


const linkModel = new mongoose.Schema({
    ownerEmail: { type: String, required: true},
    urlId: { type: String, required: true},
    endUrl: { type: String, required: true},
    createdAt: { type: Date, required: false, default: new Date},
    clicks: { type: Number, required: false, default: 0}
})


const links = mongoose.model('Links', linkModel)


export default links