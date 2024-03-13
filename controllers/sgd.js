const SgdModel = require("../models/Sgd");

exports.getAll = async (req, res) => {
  const [data] = await SgdModel.findAll();

  res.status(200).json(data);
};

exports.create = async (req, res) => {
  const { value, pair } = req.body;
  const [data] = await SgdModel.create(value, pair);

  res.status(200).json(data);
};
