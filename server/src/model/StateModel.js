import { connection } from "./database.js";

export class StateModel {
  static async setItem(name, value) {
    if (await StateModel.getItem(name)) {
      return connection.query(`UPDATE state SET value = '${value}' WHERE name = '${name}'`);
    }
    return connection.query(`INSERT INTO state (name, value) VALUES ('${name}', '${value}')`);
  }

  static async getItem(name) {
    const query = await connection.query(`SELECT * FROM state WHERE name='${name}';`);
    return query.length === 0 ? null : query[0].value;
  }
}
