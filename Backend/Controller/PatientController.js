const Patient = require("../Models/PatientModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Function to sign the token
const signToken = (id) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT Secret not defined");
  }

  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h", // Default expiry in 1 hour
  });
};

// Signup (register)
exports.signup = async (req, res) => {
  const { password, passwordConfirm } = req.body;

  // Check if password matches passwordConfirm
  if (password !== passwordConfirm) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  try {
    // Create a new patient
    const patient = await Patient.create(req.body);

    // Generate token
    const token = signToken(patient._id);

    // Respond with the token and patient data
    res.status(201).json({
      message: "Patient registered successfully",
      token,
      data: { patient },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error registering patient",
    });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validate request body
  if (!email || !password) {
    return res.status(400).json({
      message: "Please provide email and password",
    });
  }

  try {
    // Check if patient exists
    const patient = await Patient.findOne({ email }).select("+password");

    if (!patient) {
      return res.status(400).json({
        message: "No patient found with this email",
      });
    }

    // Compare password with hashed password in the database
    const isPasswordCorrect = await bcrypt.compare(password, patient.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    // Generate token
    const token = signToken(patient._id);

    // Send response with token
    res.status(200).json({
      message: "User logged in successfully",
      token,
      data: { patient },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error logging in",
    });
  }
};
