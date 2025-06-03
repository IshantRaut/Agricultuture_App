import Razorpay from "razorpay";

// Create Razorpay order
export const createRazorpayOrder = async (req, res) => {
  const { amount } = req.body;
  // Initialize Razorpay here, after dotenv has loaded
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  try {
    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Payment order creation failed" });
  }
};