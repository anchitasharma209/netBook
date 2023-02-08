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
    timestamps:true    //timestamp is fumction(moongose schema ek function hai yellow bracket function ka pehla argument and timestam dusra argument pehla arg ek object hai dusra agr ek object hai timestamp optional hai)
})

const User = mongoose.model("User",contactSchema)
module.exports = User;