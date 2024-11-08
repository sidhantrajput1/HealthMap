const express = require('express');
const AppointmentController = require('../Controller/AppoointmentController')

const router = express.Router()

router.get('/', AppointmentController.getAllAppointment);
router.get('/:id', AppointmentController.getAppointmentById);
router.post('/', AppointmentController.createAppointment);
router.put('/:id', AppointmentController.updateAppointment);
router.delete('/:id', AppointmentController.deleteAppointment);


module.exports = router