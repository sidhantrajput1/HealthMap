const express = require('express');
const DoctorController = require('../Controller/DoctorController.js')


const router = express.Router();

router.post('/signup', DoctorController.signup);


module.exports = router;