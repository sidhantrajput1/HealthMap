
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
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

const Patient =  mongoose.model('Patient', patientSchema);


module.exports = Patient