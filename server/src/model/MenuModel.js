import { connection } from "./database.js";

export class MenuModel {
  static async addMenuItem(data) {
    const { name, description, photoUrl, category, subCategory, unit, price, scale, isScaled } = data;
    await connection.query(`INSERT INTO menu (name, description, photoUrl, category, subCategory, unit, price, scale, isScaled) VALUES ('${name}', '${description}', '${photoUrl}', '${category}', '${subCategory}', '${unit}', '${price}', '${scale}', '${isScaled}');`);
  }

  static async getMenuItems() {
    return connection.query("SELECT * FROM menu;");
  }
}
