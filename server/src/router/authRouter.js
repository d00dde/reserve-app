import express from "express";
import { authController } from "../controller/AuthController.js";
import { body } from "express-validator";
import { userMiddleware } from "../../middlewares/userMiddleware.js";

const router = express.Router();

router.post("/register",
  body("name").exists().matches(/^\w{3,15}$/),
  body("phone").exists().matches(/^\+380\d{9}$/),
  body("password").exists().matches(/^[\w_+\-*&^%@#$]{3,15}$/),
  authController.register
);
router.get("/whoAmI", authController.whoAmI);
router.post("/activate/:id", authController.activate);
router.post("/login", authController.login);
router.post("/logout", userMiddleware, authController.logout);
router.post("/refresh", userMiddleware, authController.refresh);

export default router;
