const express = require('express');
const PatientController = require('../Controller/PatientController')

const router = express.Router();

router.post('/signup', PatientController.signup);
router.post('/login', PatientController.login);

module.exports = router;