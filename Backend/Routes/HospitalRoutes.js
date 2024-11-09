const express = require("express");
const router = express.Router();
const HospitalController = require('../Controller/HospitalController')


router.post("/register", HospitalController.register);
router.post("/login", HospitalController.login);



module.exports = router;
