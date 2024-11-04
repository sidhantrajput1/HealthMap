const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type : {
        type : String,
        enum : ['doctor', 'medical', 'neurologisit'],
        coordinates: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        },
    }
    
})


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;