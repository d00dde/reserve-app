import { MenuModel } from "../model/MenuModel.js";
import { StateModel } from "../model/StateModel.js";

class MenuCacheHelper {
  async getMenu() {
    const cachedMenu = await StateModel.getItem("menu");
    if (cachedMenu) {
      return cachedMenu;
    }
    const scaleBase = (await StateModel.getItem("scaleBase")) ?? 0;
    const menu = JSON.stringify(await this.generateMenu(scaleBase));
    await StateModel.setItem("menu", menu);
    return menu;
  }

  async updateCache() {
    const scaleBase = (await StateModel.getItem("scaleBase")) ?? 0;
    const menu = JSON.stringify(await this.generateMenu(scaleBase));
    await StateModel.setItem("menu", menu);
  }

  async generateMenu(base) {
    const sourceItems = await MenuModel.getMenuItems();
    const categoryNames = Array.from(new Set(sourceItems.map((item) => item.category)));
    return categoryNames.map((category) => {
      const subcategoryNames = Array.from(new Set(sourceItems.filter((item) => item.category === category).map((item) => item.subCategory)));
      const subcategories = subcategoryNames.map((subCategory) => {
        const items = sourceItems.filter((item) => item.category === category && item.subCategory === subCategory).map((item) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          category: item.category,
          subCategory: item.subCategory,
          photoUrl: item.photoUrl,
          price: item.price,
          unit: item.unit,
          scale: item.scale,
          isScaled: !!item.isScaled,
          cost: Math.round(item.isScaled ? base*item.scale : item.price),
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
