const UsdModel = require("../models/Usd");

exports.getAll = async (req, res) => {
  const [data] = await UsdModel.findAll();

  res.status(200).json(data);
};

exports.create = async (req, res) => {
  const { value, pair } = req.body;
  const [data] = await UsdModel.create(value, pair);

  res.status(200).json(data);
};
