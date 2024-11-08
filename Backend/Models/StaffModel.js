const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Nurse", "Technician", "Admin"],
    },
    contactInfo: {
      phone: String,
      email: String,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
