// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const PatientRouter = require("./Routes/PatientRoutes.js");
const DoctorRouter = require("./Routes/DoctorRoutes.js");
const AppointmentRouter = require("./Routes/AppointmentRoutes.js");
const MedicalRecordRouter = require("./Routes/MedicalRecordRoutes.js");
const BillingRouter = require("./Routes/BillingRoutes.js");
const StaffRouter = require("./Routes/StaffRoutes.js");
const DepartmentRouter = require("./Routes/DepartmentRoutes.js");
const HospitalRouter = require('./Routes/HospitalRoutes.js')

const app = express();

// Middleware
const corsOption = {
  origin: "http://localhost:5173",
  credential: true,
};



app.use(cors(corsOption));
app.use(bodyParser.json());

const limiter = rateLimit({
  WindowMs: 15 * 60 * 1000,
  limit: 10,
  message: "To many Request from this IP , Please try again in an hour",
});

app.use("/api", limiter);

app.use("/api/v1/patients", PatientRouter);
app.use("/api/v1/doctors", DoctorRouter);
app.use("/api/v1/appointment", AppointmentRouter);
app.use("/api/v1/medicalrecords", MedicalRecordRouter);
app.use("/api/v1/bills", BillingRouter);
app.use("/api/v1/staff", StaffRouter);
app.use("/api/v1/department", DepartmentRouter);
app.use("/api/v1/hospital", HospitalRouter);

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from the server side 👋, hey Developer");
});

// Export the app
module.exports = app;
