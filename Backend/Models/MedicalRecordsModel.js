const mongoose = require('mongoose');
const {Schema} = mongoose

const MedicalRecordSchema = new mongoose.Schema({
    patient : {
        type : Schema.Types.ObjectId,
        ref : 'Patient',
        required : true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor', 
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    treatment: {
        type: String,
        required: true,
    },
    prescription: {
        type: String,
    },
    recordDate: {
        type: Date,
        default: Date.now,
    },
})


const MedicalRecord = mongoose.model('MedicalRecord',MedicalRecordSchema );

module.exports = MedicalRecord;
