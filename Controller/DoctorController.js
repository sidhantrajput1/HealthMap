const Doctor = require('../Models/DoctorModel.js');
const bcrypt = require('bcrypt')

exports.signup = async (req, res) => {
    const doctor = await Doctor.create(req.body);
    

    res.status(201).json({
        message : "Doctor Signup Succesfully",
        data : {
            doctor
        }
    })
}

exports.login = async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password ) {
        return res.status(401).json({
            message : "Please provide your email and password"
        })
    }
    
    const doctor = await Doctor.findOne( {email} ).select("+password");
    console.log(doctor)

    if (!doctor) {
        return res.status(401).json({
            message: 'Doctor not found, Please signup first'
        });
    }    

    res.status(201).json({
        message : 'Candidate Login Successfully',
        doctor : {
            id : doctor._id,
            name : doctor.name,
            email : doctor.email,
            specialization : doctor.specialization
        }
    })

}

