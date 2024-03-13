const JpyModel = require("../models/Jpy");

exports.getAll = async (req, res) => {
  const [data] = await JpyModel.findAll();

  res.status(200).json(data);
};

exports.create = async (req, res) => {
  const { value, pair } = req.body;
  const [data] = await JpyModel.create(value, pair);

  res.status(200).json(data);
};
