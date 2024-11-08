const Staff = require("../Models/StaffModel");

exports.createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        staff,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Get all staff members
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find().populate("department");

    res.status(200).json({
      status: "Success",
      data: {
        staff,
      },
    });
  } catch (error) {
    console.log("Error retrieving staff:", error);
  }
};

exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id).populate("department");

    if (!staff) {
      return res.status(404).json({
        status: "Failure",
        message: "Staff member not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: {
        staff,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("department");

    if (!staff) {
      return res.status(404).json({
        status: "Failure",
        message: "Staff member not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: {
        staff,
      },
    });
  } catch (error) {
    console.log(error);
  }
};


exports.deleteStaffById = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);

    if (!staff) {
      return res.status(404).json({
        status: "Failure",
        message: "Staff member not found",
      });
    }

    res.status(204).json({
      status: "Success",
      message: "Staff member successfully deleted",
    });

  } catch (error) {
    console.log(error)
  }
};
