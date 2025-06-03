import express from "express";
import { getOrdersForFarmer,createOrder,updateOrderStatus,deleteOrder } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getOrdersForFarmer);
router.post("/", protect, createOrder);
router.patch("/:id", protect, updateOrderStatus);
router.delete("/:id", protect, deleteOrder);
export default router;