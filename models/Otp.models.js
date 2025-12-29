import mongoose from "mongoose";

const OtpSChema = new mongoose.Schema({
     email:{
         type:String,
         required: true
     },
     otp:{
         type:String,
         required: true
     },
     purpose:{
        type:String,
        enum:['register', 'forgotPassword', "resendPassword"],
        required: true
     },
     createdAt:{
         type:Date,
         default:Date.now(),
         index:{expires: '5s'}

     }

})

export const Otp = mongoose.model("Otp",  OtpSChema)