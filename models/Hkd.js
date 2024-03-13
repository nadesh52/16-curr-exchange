const db = require("../utils/database");

module.exports = class HkdModel {
  static findAll() {
    const sql = `SELECT * FROM hkd`;
    return db.query(sql);
  }

  static create(value, pair) {
    const sql = `INSERT INTO hkd (value, pair) VALUES (?, ?)`;
    return db.query(sql, [value, pair]);
  }
};
