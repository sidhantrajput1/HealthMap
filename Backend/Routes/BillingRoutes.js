const express = require('express')
const BillingController = require('../Controller/BillingController.js')

const router = express.Router()

router.get('/', BillingController.getAllBilling);
router.get('/:id', BillingController.getBillById);
router.post('/', BillingController.createBills);
router.put('/:id', BillingController.updateBills);
router.delete('/:id', BillingController.deleteBills);

module.exports = router;