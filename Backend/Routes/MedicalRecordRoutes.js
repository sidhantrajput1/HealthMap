const express = require('express');
const MedicalRecordController = require('../Controller/MedicalRecordController.js')

const router = express.Router();


router.get('/', MedicalRecordController.getAllMedicalRecords);
router.get('/:id', MedicalRecordController.getMedicalRecordsById);
router.post('/', MedicalRecordController.createMedicalRecord);
router.put('/:id', MedicalRecordController.updateMedicalRecord);
router.delete('/:id', MedicalRecordController.deleteMedicalRecord);


module.exports = router;