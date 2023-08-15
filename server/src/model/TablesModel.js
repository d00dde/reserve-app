import { connection } from "./database.js";

export class TablesModel {
  static async addTable(name, placesMin, placesMax) {
    await connection.query(`INSERT INTO tables (name, places_min, places_max) VALUES ('${name}', '${placesMin}', '${placesMax}');`);
  }

  static async getTables() {
    return connection.query("SELECT * FROM tables;");
  }

  static async getTableById(id) {
    const response = await connection.query(`SELECT * FROM tables WHERE id='${id}';`);
    return response[0];
  }
}
