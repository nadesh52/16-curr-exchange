const db = require("../utils/database");

module.exports = class EurModel {
  static findAll() {
    const sql = `SELECT * FROM eur`;
    return db.query(sql);
  }

  static create(value, pair) {
    const sql = `INSERT INTO eur (value, pair) VALUES (?, ?)`;
    return db.query(sql, [value, pair]);
  }
};
