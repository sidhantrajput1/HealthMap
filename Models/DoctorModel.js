const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : [true, 'Please Enter Your valid email']
    },
    password : {
        type : String,
        required : true
    }
})


const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;