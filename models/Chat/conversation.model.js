import mongoose from "mongoose";

const converstionSchema = new mongoose.Schema({

    participants:[{
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
    }] ,

     isGroup:{
         type:Boolean,
         default: false
     },
     name:{
         type:String,
         default:null
     },
     avatar:{
         type:String,
         default:null
     },
     admins:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:'User'
        }
     ]



},{timestamps: true})


export const Chat = mongoose.model('Chat', converstionSchema)