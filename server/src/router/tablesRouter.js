import express from "express";
import { tablesController } from "../controller/TablesController.js";
import { userMiddleware } from "../../middlewares/userMiddleware.js";
import { adminMiddleware } from "../../middlewares/adminMiddleware.js";

const router = express.Router();

router.post("/create", adminMiddleware, tablesController.create);
router.get("/:id", userMiddleware, tablesController.getTableById);
router.get("/", userMiddleware, tablesController.getAllTables);

export default router;
