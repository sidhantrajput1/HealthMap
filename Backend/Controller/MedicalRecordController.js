const MedicalRecord = require("../Models/MedicalRecordsModel.js");

exports.getAllMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find().populate("patient");

    res.status(201).json({
      message: "Medical Records Fetch Successfully",
      data: {
        records,
      },
    });

  } catch (error) {
    console.log(error);
  }
};

exports.getMedicalRecordsById = async (req, res) => {
  try {
    const records = await MedicalRecord.findById(req.params.id).populate(
      "patient"
    );

    if (!records) {
      res.status(400).json({
        message: "Records is not found",
      });
    }

    res.status(201).json({
      message: "Records fetch Successfully",
      data: {
        records,
      },
    });

  } catch (error) {
    console.log(error);
  }
};


exports.createMedicalRecord = async (req, res) => {
  try {
    const records = await MedicalRecord.create(req.body);
    // await records.save();

    res.status(201).json({
      status: "Success",
      data: {
        records,
      },
    });

  } catch (error) {
    console.log(error);
  }
};


exports.updateMedicalRecord = async (req, res) => {
  try {
    const records = await MedicalRecord.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!records) {
      res.status(400).json({
        message: "Record Not Found",
      });
    }

    res.status(201).json({
      status: "Success",
      data: {
        records,
      },
    });

  } catch (error) {
    console.log(error);
  }
};


exports.deleteMedicalRecord = async (req, res) => {
    try {
        const record = await MedicalRecord.findByIdAndDelete(req.params.id);

        if (!record) {
            res.status(400).json({
                message : 'Medical Record not Found'
            })
        }

        res.status(201).json({
            message : 'Records Delete Successfully'
        })
    } catch (error) {
        console.log(error)
    }
}
