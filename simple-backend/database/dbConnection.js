import mongoose from "mongoose";

export const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URI,{dbName:"MERN_STACK_MESSAGE"})
    .then(()=>{
        console.log("connectd to database")
    })
    .catch((err)=>{
        console.log("error connecting to database" ,err)
    })
}