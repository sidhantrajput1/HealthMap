const Doctor = require('../Models/DoctorModel.js');

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

    res.status(201).json({
        status : 'Success',
        message : 'Candidate Login Successfully'
    })

}

