const config = require("../config/config.json");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

module.exports = db.promise();
