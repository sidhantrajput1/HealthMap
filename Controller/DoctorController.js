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

