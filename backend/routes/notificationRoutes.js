const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const getNotificationsController = require("../controllers/notification/getNotificationsController");

// @GET
// @desc Get notifications
router.get("/notifications/:id", authMiddleware, getNotificationsController);


module.exports = router;
