const mongoose=require("mongoose");
const validator =require("validator");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new error ("Invalid email id")
            }
        }
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true,
        minLength:2
    },
    date:{
        type:Date,
        default:Date.now
    }
});

//we need a collection
const User= mongoose.model("User",userSchema);
module.exports=User;