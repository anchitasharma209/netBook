const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true    //same email se dobara signup nahi kar skte so unique is validator here
    },
    password:{
        type:String,
        required:true
    }
    
},
{
    timestamps:true
})

const User = mongoose.model("User",contactSchema)
module.exports = User;