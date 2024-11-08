const Patient = require("../Models/PatientModel");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config( { path : './config.env'});


const signToken = (id) => {
  // console.log(process.env.JWT_SECRET);

  if(!process.env.JWT_SECRET)

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {

  const {password , passwordConfirm} = req.body
  
  if(this.password !== passwordConfirm) {
    return res.status(401).json({
      message : "Password do not match"
    })
  }
  
  const patient = await Patient.create(req.body);
  const token = signToken(patient._id);

  res.status(200).json({
    messgae: "Patient Register Successfully",
    token,
    data: {
      patient,
    },
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      messgae: "Please provide email and password",
    });
  }

  const patient = await Patient.findOne({ email }).select("+password");

  res.status(201).json({
    status: "Success",
    messgae : "User login Successfully"
  });
};
