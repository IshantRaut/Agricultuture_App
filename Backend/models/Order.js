import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Product name
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  unit: { type: String, required: true },
  status: { type: String, default: "Pending" },
  orderDate: { type: Date, default: Date.now },
  farmer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Farmer reference
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  // Buyer reference
});

const Order = mongoose.model("Order", orderSchema);

export default Order;