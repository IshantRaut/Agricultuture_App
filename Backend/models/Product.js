import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  description: String,
  image: String, // Store as base64 or image URL
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Owner
}, { timestamps: true });

export default mongoose.model("Product", productSchema);