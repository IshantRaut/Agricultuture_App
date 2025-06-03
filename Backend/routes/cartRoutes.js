import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addToCart,getCart,removeFromCart,clearCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", protect, addToCart);         // Add item to cart
router.get("/", protect, getCart);               // Get user's cart
router.delete("/remove", protect, removeFromCart); // Remove item from cart (send {productId} in body)
router.delete("/clear", protect, clearCart);     // Clear cart

export default router;