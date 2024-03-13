const db = require("../utils/database");

module.exports = class JpyModel {
  static findAll() {
    const sql = `SELECT * FROM jpy`;
    return db.query(sql);
  }

  static create(value, pair) {
    const sql = `INSERT INTO jpy (value, pair) VALUES (?, ?)`;
    return db.query(sql, [value, pair]);
  }
};
