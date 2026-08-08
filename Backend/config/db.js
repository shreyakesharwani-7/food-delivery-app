import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://shreyakesharwaniwork_db_user:shree7054@cluster0.cin59cz.mongodb.net/food-del'
).then(()=>console.log("DB Connected"));
}