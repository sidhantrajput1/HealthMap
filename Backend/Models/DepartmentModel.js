const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      building: {
        type: String,
        required: true,
      },
      floor: {
        type: String,
        required: true,
      },
      roomNumber: {
        type: String,
      },
    },
    coordinates: { lat: Number, lng: Number },
    staff: [{
      type: Schema.Types.ObjectId,
      ref: 'Staff',
    }],
    departmentHead: {
      type: Schema.Types.ObjectId,
      ref: 'Staff', 
    },
    operationalHours: {
      monday: {
        open: String,
        close: String,
      },
      tuesday: {
        open: String,
        close: String,
      },
      wednesday: {
        open: String,
        close: String,
      },
      thursday: {
        open: String,
        close: String,
      },
      friday: {
        open: String,
        close: String,
      },
      saturday: {
        open: String,
        close: String,
      },
      sunday: {
        open: String,
        close: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;


// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const departmentSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Department = mongoose.model('Department', departmentSchema);

// module.exports = Department;
