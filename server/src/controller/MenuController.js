import { MenuModel } from "../model/MenuModel.js";
import { StateModel } from "../model/StateModel.js";
import { menuCacheHelper } from "../helper/MenuCacheHelper.js";

class MenuController {
  async createMenuItem(req, res, next) {
    try {
      await MenuModel.addMenuItem(req.body);
      await menuCacheHelper.updateCache();
      res.json({ message: "New menu item created" });
    }
    catch(err) {
      next(err);
    }
  }

  async updateMenuItem(req, res, next) {
    try {
      await MenuModel.updateMenuItem(req.params.id, req.body);
      await menuCacheHelper.updateCache();
      res.json({ message: "Menu item updated" });
    }
    catch(err) {
      next(err);
    }
  }

  async getScaleBase(req, res, next) {
    try {
      const base = (await StateModel.getItem("scaleBase")) ?? 0;
      res.json({ base });
    }
    catch(err) {
      next(err);
    }
  }

  async updateScaleBase(req, res, next) {
    try {
      await StateModel.setItem("scaleBase", req.body.base);
      await menuCacheHelper.updateCache();
      res.json({ message: "Scale base updated" });
    }
    catch(err) {
      next(err);
    }
  }

  async deleteMenuItem(req, res, next) {
    try {
      await MenuModel.removeMenuItem(req.params.id);
      await menuCacheHelper.updateCache();
      res.json({ message: "Deleted successful" });
    }
    catch(err) {
      next(err);
    }
  }

  async getMenu(req, res, next) {
    try {
      const menu = await menuCacheHelper.getMenu();
      res.send(menu);
    }
    catch(err) {
      next(err);
    }
  }
}

export const menuController = new MenuController();
