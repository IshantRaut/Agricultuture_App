import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createProduct, getMyProducts, deleteProduct,getAllProducts } from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, createProduct); // Add product
router.get("/", protect, getMyProducts);  // Get all products for user
router.delete("/:id", protect, deleteProduct); // Delete product
router.get("/market", getAllProducts);
export default router;