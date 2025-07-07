const express = require("express");
const {
  createPaymentIntent,
  sendEmailToTest,
  getAllOrdersByUser,
  getOrderDetails
} = require("../../controllers/user/OrderController");

const orderRouter = express.Router();

// orderRouter.post("/", createOrder);
// orderRouter.post("/capture", capturePayment);
// orderRouter.get("/:userId", getAllOrdersByUser);
// orderRouter.get("/:id", getOrderDetails);

// router.post(
//   "/webhook",
//   express.raw({ type: "application/json" }),
//   stripeWebhook
// );

// // Payment routes
// router.post("/create-payment-intent", createPaymentIntent);
// router.post("/confirm-payment", confirmPayment);
// router.get("/user/:userId", getUserOrders);
orderRouter.post("/create-payment-intent", createPaymentIntent);
// orderRouter.post("/confirm-payment", confirmPayment);
orderRouter.post("/send-email", sendEmailToTest)



// router.post("/create", createOrder);
// router.post("/capture", capturePayment);
orderRouter.get("/:userId", getAllOrdersByUser);
orderRouter.get("/:userId/:id", getOrderDetails);

module.exports = orderRouter;
