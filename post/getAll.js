const getEur = require("./eur");
const getJpy = require("./jpy");
const getHkd = require("./hkd");
const getSgd = require("./sgd");
const getUsd = require("./usd");

const getAll = () => {
  getEur();
  getJpy();
  getHkd();
  getSgd();
  getUsd();
};

module.exports = getAll;
