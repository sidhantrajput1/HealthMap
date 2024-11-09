const Department = require("../Models/DepartmentModel");

exports.createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        department,
      },
    });
  } catch (error) {
    console.log("Error creating department:", error);
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find().populate(
      "staff departmentHead"
    );

    res.status(200).json({
      status: "Success",
      data: {
        departments,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        status: "Failure",
        message: "Department not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: {
        department,
      },
    });
  } catch (error) {
    console.log("Error retrieving department:", error);
  }
};

exports.updateDepartmentById = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("staff departmentHead");

    if (!department) {
      return res.status(404).json({
        status: "Failure",
        message: "Department not found",
      });
    }

    res.status(200).json({
      status: "Success",
      data: {
        department,
      },
    });
  } catch (error) {
    console.log(error);
  }
};


exports.deleteDepartmentById = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);

    if (!department) {
      return res.status(404).json({
        status: "Failure",
        message: "Department not found",
      });
    }

    res.status(204).json({
      status: "Success",
      message: "Department successfully deleted",
    });

  } catch (error) {
    console.log(error)
  }
};
