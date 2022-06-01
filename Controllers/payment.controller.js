const Payment = require("../Models/Payment.model");

module.exports.paymentControllers = {
  createPayment: async (req, res) => {
    res.json(await Payment.create({ text: req.body.text }));
  },
  deletePayment: async (req, res) => {
      res.json(await Payment.findByIdAndRemove(req.params.id))
  }
};
