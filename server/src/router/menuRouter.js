import express from "express";
import { menuController } from "../controller/MenuController.js";
import { adminMiddleware } from "../../middlewares/adminMiddleware.js";

const router = express.Router();

router.post("/create", adminMiddleware, menuController.createMenuItem);
router.delete("/:id",  adminMiddleware, menuController.deleteMenuItem);
router.put("/scale",  adminMiddleware, menuController.updateScaleBase);
router.put("/:id",  adminMiddleware, menuController.updateMenuItem);
router.get("/scale",  adminMiddleware, menuController.getScaleBase);
router.get("/", menuController.getMenu);

export default router;
