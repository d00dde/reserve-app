import { createPool } from "mysql";
import { config } from "../../config/server_config.js";

class MySQLConnect {
  constructor() {
    this.pool = createPool({
      host: config.MYSQL_HOST,
      port: config.MYSQL_PORT,
      user: config.MYSQL_USER,
      password: config.MYSQL_PASS,
      database: config.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  async query(sql) {
    return new Promise((resolve, reject) => {
      this.pool.query(sql, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

export const connection = new MySQLConnect();
