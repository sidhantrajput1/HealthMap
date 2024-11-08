const mongoose = require("mongoose");
const { Schema } = mongoose;

const billingSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    totalAmount: Number,
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending"],
      default: "Pending",
    },
    insuranceDetails: String,
  },
  {
    timestamps: true,
  }
);


const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing