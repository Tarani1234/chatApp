import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
     firstName:{
         type:String,
         required: true
     },
     lastName:{
         type:String,
         required: true
     },
     email:{
         type:String,
         required: true,
         unique:true
     },
      type:{
         type:String,
         enum:["User", "admin"],
         default: "User"
      },
     password:{
         type:String,
         required: true
     },
     isVerified:{
       type:Boolean,
       default: false   
     },
     city:{
         type:String
     },
    State:{
         type:String
    },
     Country:{
         type:String
     },
      location:{
         type:{
            type:String,
             enum: ["Point"],
        default: "Point"
         },
           coordinates: {
        type: [Number], 
        default: [0, 0]
      }
      }
}, {timestamps: true})


UserSchema.index({ location: "2dsphere" });
export const user = mongoose.model('user', UserSchema)

