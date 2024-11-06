const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your valid email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    qualifications: {
      type: [String],
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    consultationFee: {
      type: Number,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    hospital: {
      type: String,
      required: true,
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    emergencyContact: {
      type: String,
    },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
  },
  {
    timestamps: true,
  }
);

doctorSchema.pre("save", async function (next) {
  // only runs this function if password is actually modified
  if (!this.isModified("password")) {
    return next();
  }

  // hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;

/*

id : {
        type: String,
        default : () => Date.now()
    },

*/
