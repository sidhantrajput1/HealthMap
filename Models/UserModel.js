
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        min : 8
    },
    password : {
        type : String,
        required : [true , "Please Enter a Strong Password"]
    }
})

const User = mongoose.model('User', userSchema);


module.exports = User