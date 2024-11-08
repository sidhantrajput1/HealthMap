const express = require('express');
const StaffController = require('../Controller/StaffController.js')

const router = express.Router()

router.get('/', StaffController.getAllStaff);
router.get('/:id', StaffController.getStaffById);
router.post('/', StaffController.createStaff);
router.put('/:id', StaffController.updateStaffById);
router.delete('/:id', StaffController.deleteStaffById);

module.exports = router;