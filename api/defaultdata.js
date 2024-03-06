

import dataa from "./models/dataSchema.js";
import sampleData from "./constant/data.js";

const DefaultData= async() =>{
    try{

       await dataa.deleteMany({}); // to avoid data repetition everytime u run the program

        const storeData = await dataa.insertMany(sampleData);
        // console.log(storeData);
    } catch (error){
        console.log("error" + error.message);
    }
};


export default DefaultData;