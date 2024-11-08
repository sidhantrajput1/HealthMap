const Appointment = require("../Models/AppointmentModel.js");

exports.getAllAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.find().populate('patient').populate('doctor')

    res.status(201).json({
      messgae: "Get All Appointment",
      data: {
        appointment,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//  get an appointment by id
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).populate(
      "doctor patient"
    );
    if (!appointment) {
      return res.status(401).json({
        messgae: "Appointment is not Found",
      });
    }

    res.status(201).json({
      messgae: "Appointment is fatching Succesfully",
      data: {
        appointment,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    await appointment.save();

    res.status(201).json({
      status: "Success",
      data: {
        appointment,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!appointment) {
        res.status(400).json({
            messgae : "Appointment not Found"
        })
    }

    res.status(201).json({
        status : 'Success',
        data : {
            appointment
        }
    })

  } catch (error) {
    console.log(error);
  }
};


// Delete Tours

exports.deleteAppointment = async(req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!appointment) {
            res.status(400).json({
                message : 'Appointment is not found'
            })
        }

        res.status(404).json({
            message : 'Appointment deleted Successfully'
        })
    } catch (error) {
        console.log(error)
    }
}