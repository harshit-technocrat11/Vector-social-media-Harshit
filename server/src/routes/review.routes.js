import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  createReview,
  getReviews,
  getAverage,
} from "../controllers/review.controller.js";
import { postWriteLimiter } from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, postWriteLimiter, createReview);
router.get("/", getReviews);
router.get("/average", getAverage);

export default router;
