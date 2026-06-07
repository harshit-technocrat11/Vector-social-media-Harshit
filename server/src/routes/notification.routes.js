import express from "express";
import auth from "../middlewares/auth.middleware.js";
import { deleteAllNotifications, deleteMultipleNotifications, deleteNotification, getNotifications, markAllAsRead, markAsRead } from "../controllers/notification.controller.js";
import { commentWriteLimiter } from "../middlewares/rateLimit.middleware.js";

const notificationRouter = express.Router();

notificationRouter.get("/", auth, getNotifications);
notificationRouter.put("/read-all", auth, commentWriteLimiter, markAllAsRead);
notificationRouter.delete("/all", auth, commentWriteLimiter, deleteAllNotifications);
notificationRouter.put("/:id/read", auth, markAsRead);
notificationRouter.delete("/:id", auth, deleteNotification);
notificationRouter.post("/bulk-delete", auth, commentWriteLimiter, deleteMultipleNotifications);

export default notificationRouter;