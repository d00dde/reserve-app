import { connection } from "./database.js";

export class UserModel {
  static async addUser(name, phone, password) {
    await connection.query(`INSERT INTO users (name, phone, password) VALUES ('${name}', '${phone}', '${password}');`);
    return UserModel.getUserByPhone(phone);
  }

  static async getUsers() {
    return connection.query("SELECT * FROM users;");
  }

  static async getUserById(id) {
    const response = await connection.query(`SELECT * FROM users WHERE id='${id}';`);
    return response[0];
  }

  static async activate(id) {
    return connection.query(`UPDATE users SET isActive = 1 WHERE id = '${id}';`);
  }

  static async setRefreshToken(id, refreshToken) {
    return connection.query(`UPDATE users SET refreshToken = "${refreshToken}" WHERE id = '${id}';`);
  }

  static async deleteRefreshToken(refreshToken) {
    return connection.query(`UPDATE users SET refreshToken = NULL WHERE refreshToken = '${refreshToken}';`);
  }

  static async findUserByToken(refreshToken) {
    const response = await connection.query(`SELECT * FROM users WHERE refreshToken='${refreshToken}';`);
    return response[0];
  }

  static async getUserByPhone(phone) {
    const response = await connection.query(`SELECT * FROM users WHERE phone='${phone}';`);
    return response[0];
  }
}
