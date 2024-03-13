const db = require("../utils/database");

module.exports = class UsdModel {
  static findAll() {
    const sql = `SELECT * FROM usd`;
    return db.query(sql);
  }

  static create(value, pair) {
    const sql = `INSERT INTO usd (value, pair) VALUES (?, ?)`;
    return db.query(sql, [value, pair]);
  }
};
