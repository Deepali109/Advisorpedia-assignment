import mongoose from "mongoose";


const dataSchema =new mongoose.Schema({
    username:String,
    title:String,
    description:String,
    image:Object,
    location:String,
    country:String
})


const dataa= new mongoose.model("sampledata", dataSchema)

export default dataa;