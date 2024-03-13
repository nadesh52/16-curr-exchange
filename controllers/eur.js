const EurModel = require("../models/Eur");

exports.getAll = async (req, res) => {
  const [data] = await EurModel.findAll();

  res.status(200).json(data);
};

exports.create = async (req, res) => {
  const { value, pair } = req.body;
  const [data] = await EurModel.create(value, pair);

  res.status(200).json(data);
};
