import { MenuModel } from "../model/MenuModel.js";
import { StateModel } from "../model/StateModel.js";

class MenuCacheHelper {
  async getMenu() {
    const cachedMenu = await StateModel.getItem("menu");
    if (cachedMenu) {
      return cachedMenu;
    }
    const menu = JSON.stringify(await this.generateMenu(10));
    await StateModel.setItem("menu", menu);
    return menu;
  }

  async updateCache() {
    const menu = JSON.stringify(await this.generateMenu());
    await StateModel.setItem("menu", menu);
  }

  async generateMenu(base) {
    const sourceItems = await MenuModel.getMenuItems();
    const categoryNames = Array.from(new Set(sourceItems.map((item) => item.category)));
    return categoryNames.map((category) => {
      const subcategoryNames = Array.from(new Set(sourceItems.filter((item) => item.category === category).map((item) => item.subCategory)));
      const subcategories = subcategoryNames.map((subCategory) => {
        const items = sourceItems.filter((item) => item.category === category && item.subCategory === subCategory).map((item) => ({
          name: item.name,
          description: item.description,
          photoUrl: item.photoUrl,
          price: item.price,
          unit: item.unit,
          scale: item.scale,
          isScaled: item.isScaled,
          cost: item.isScaled ? base*item.scale : item.price,
        }));
        return {
          subCategoryName: subCategory,
          items,
        }
      });
      return {
        categoryName: category,
        subcategories,
      }
    });
  }
}

export const menuCacheHelper = new MenuCacheHelper();
