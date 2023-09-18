import { MenuModel } from "../model/MenuModel.js";
import { menuCacheHelper } from "../helper/MenuCacheHelper.js";

class MenuController {
  async create(req, res, next) {
    try {
      await MenuModel.addMenuItem(req.body);
      res.json({ message: "New menu item created" });
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
