import express from "express";
import { signup, login, getProfile,updateProfile } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getProfile); // Protected profile route
router.put("/profile", protect, updateProfile); 
router.post("/signup", signup);
router.post("/login", login);

export default router;