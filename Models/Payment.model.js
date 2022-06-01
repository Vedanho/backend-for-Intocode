const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  text: String,
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
