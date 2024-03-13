const db = require("../utils/database");

module.exports = class SgdModel {
  static findAll() {
    const sql = `SELECT * FROM sgd`;
    return db.query(sql);
  }

  static create(value, pair) {
    const sql = `INSERT INTO sgd (value, pair) VALUES (?, ?)`;
    return db.query(sql, [value, pair]);
  }
};
