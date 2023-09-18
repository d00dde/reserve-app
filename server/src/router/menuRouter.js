import express from "express";
import { menuController } from "../controller/MenuController.js";
import { adminMiddleware } from "../../middlewares/adminMiddleware.js";

const router = express.Router();

router.post("/create", adminMiddleware, menuController.create);
router.get("/", menuController.getMenu);

export default router;
