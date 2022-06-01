const { Router } = require("express");

const { paymentControllers } = require("../Controllers/payment.controller");

const router = Router();

router.post('/payment', paymentControllers.createPayment)
router.delete('/payment/:id', paymentControllers.deletePayment)

module.exports = router