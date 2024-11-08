const Billing = require("../Models/BillingModel.js");

exports.getAllBilling = async (req, res) => {
  try {
    const bills = await Billing.find().populate("patient");

    res.status(201).json({
      status: "Success",
      data: {
        bills,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getBillById = async (req, res) => {
  try {
    const bill = await Billing.findById(req.params.id).populate("patient");

    if (!bill) {
      return res.status(400).json({
        message: "Records not found",
      });
    }

    res.status(201).json({
      status: "Success",
      data: {
        bill,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createBills = async (req, res) => {
  try {
    const bill = await Billing.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        bill,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateBills = async (req, res) => {
  try {
    
    const bill = await Billing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('patient')

    if (!bill) {
      return res.status(400).json({
        message: "Records not found",
      });
    }

    res.status(201).json({
      status: "Success",
      data: {
        bill
      },
    });

  } catch (error) {
    console.log(error);
  }
};


exports.deleteBills = async(req, res) => {
    try {
        const bill = await Billing.findByIdAndDelete(req.params.id);

        if (!bill) {
            return res.status(400).json({
              message: "Records not found",
            });
        }

        res.status(201).json({
            message : 'Bills deleted Successfully'
        })
    } catch (error) {
        console.log(error)
    }
}
