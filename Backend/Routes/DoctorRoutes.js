const express = require('express');
const DoctorController = require('../Controller/DoctorController.js')


const router = express.Router();

router.post('/signup', DoctorController.signup);
router.post('/login', DoctorController.login);


module.exports = router;