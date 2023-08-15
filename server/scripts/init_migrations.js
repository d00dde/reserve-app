import { createConnection } from "mysql";
import { config } from "../config/server_config.js";

const connection = createConnection({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASS,
});

const sqls = [
  `CREATE DATABASE IF NOT EXISTS ${config.MYSQL_DATABASE};`,
  `CREATE TABLE IF NOT EXISTS ${config.MYSQL_DATABASE}.users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, phone VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, isActive BOOLEAN DEFAULT false, refreshToken VARCHAR(500), role VARCHAR(100) DEFAULT 'user', CHECK (role IN ('user', 'admin')), createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`,
  `CREATE TABLE IF NOT EXISTS ${config.MYSQL_DATABASE}.tables (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, places_min INT NOT NULL, places_max INT NOT NULL, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`,
  `CREATE TABLE IF NOT EXISTS ${config.MYSQL_DATABASE}.reserves (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, table_id INT NOT NULL, time_from TIMESTAMP, time_to TIMESTAMP, createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`,
  `ALTER TABLE ${config.MYSQL_DATABASE}.reserves ADD FOREIGN KEY (user_id) REFERENCES ${config.MYSQL_DATABASE}.users(id);`,
  `ALTER TABLE ${config.MYSQL_DATABASE}.reserves ADD FOREIGN KEY (table_id) REFERENCES ${config.MYSQL_DATABASE}.tables(id);`,
];

function setQuery(connection, sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err) => {
      if(err) {
        return reject(err);
      }
      resolve();
    })
  })
}

connection.connect(async (err) => {
  if(err) throw err;
  try {
    await Promise.all(sqls.map((sql) => setQuery(connection, sql)));
  }
  catch (err) {
    throw err;
  }
  connection.destroy();
})
