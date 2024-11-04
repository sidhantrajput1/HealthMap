// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const validator = require('validator')

// const UserSchema =new mongoose.Schema({
//     name : {
//         type : String,
//         required : true
//     },
//     email : {
//         type : String,
//         required : true,
//     }, 
//     password : {
//         type  :String,
//         required : true,
//         min : 8
//     }
// })

// UserSchema.pre('save' , async function(next) {
//     if(this.isModified('password')) return next;

//     this.password = await bcrypt.hash(this.password, 12);
//     this.comparePassword = undefined;
//     return next();

// })

// Method to compare password ( fot signup )
// UserSchema.methods.comparePassword = async function(userPassword) {
//     return await bcrypt.compare(userPassword, this.password);
// };


// const User = mongoose.model('User', UserSchema);


// module.exports = User;


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