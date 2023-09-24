import { connection } from "./database.js";

export class MenuModel {
  static async addMenuItem(data) {
    const { name, description, photoUrl, category, subCategory, unit, price, scale, isScaled } = data;
    await connection.query(`INSERT INTO menu (name, description, photoUrl, category, subCategory, unit, price, scale, isScaled) VALUES ('${name}', '${description}', '${photoUrl}', '${category}', '${subCategory}', '${unit}', '${price}', '${scale}', '${isScaled ? 1 : 0}');`);
  }

  static async updateMenuItem(id, data) {
    const { name, description, photoUrl, category, subCategory, unit, price, scale, isScaled } = data;
    await connection.query(`UPDATE menu SET name = '${name}', description = '${description}', photoUrl = '${photoUrl}', category = '${category}', subCategory = '${subCategory}', unit = '${unit}', price = '${price}', scale = '${scale}', isScaled = '${isScaled ? 1 : 0}' WHERE id = '${id}';`);
  }

  static async removeMenuItem(id) {
    await connection.query(`DELETE FROM menu  WHERE id='${id}';`);
  }

  static async getMenuItems() {
    return connection.query("SELECT * FROM menu;");
  }
}
