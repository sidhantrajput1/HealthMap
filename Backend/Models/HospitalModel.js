const mongoose = require('mongoose');
const { Schema } = mongoose;

const hospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password : {
        type : String
    },
    location: {
      address: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
      coordinates: {
        latitude: Number,
        longitude: Number,
      },
    },
    contactInfo: {
      phone: {
        main: String,
        emergency: String,
        helpline: String,
      },
      email: String,
      website: String,
    },
    departments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Department',
      },
    ],
    staff: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Staff',
      },
    ],
    facilities: {
      type: [String], // Example: ["Pharmacy", "Radiology", "Cafeteria", "ICU"]
    },
    services: [
      {
        name: String, // Service name
        description: String, // Brief description
        cost: Number, // Cost of service
      },
    ],
    insurancePartners: [
      {
        name: String, // Name of the insurance company
        contactNumber: String,
        coverageDetails: String,
      },
    ],
    capacity: {
      totalBeds: Number,
      availableBeds: Number,
      icuBeds: Number,
      emergencyBeds: Number,
    },
    accreditation: {
      accreditingBody: String, // Name of accrediting organization
      accreditationLevel: String, // Level or certification
      expiryDate: Date, // When accreditation is up for renewal
    },
    operationalHours: {
      monday: { open: String, close: String },
      tuesday: { open: String, close: String },
      wednesday: { open: String, close: String },
      thursday: { open: String, close: String },
      friday: { open: String, close: String },
      saturday: { open: String, close: String },
      sunday: { open: String, close: String },
    },
    emergencyServices: {
      ambulanceAvailability: Boolean,
      contactNumber: String,
      responseTime: Number, // Average response time in minutes
    },
    reviews: [
      {
        patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
        rating: {
          type: Number,
          min: 1,
          max: 5,
          required: true,
        },
        comment: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);


hospitalSchema.pre("save", async function (next) {
    // only runs this function if password is actually modified
    if (!this.isModified("password")) {
      return next();
    }
  
    // hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    next();
  });

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
