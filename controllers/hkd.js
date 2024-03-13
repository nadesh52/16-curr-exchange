const HkdModel = require("../models/Hkd");

exports.getAll = async (req, res) => {
  const [data] = await HkdModel.findAll();

  res.status(200).json(data);
};

exports.create = async (req, res) => {
  const { value, pair } = req.body;
  const [data] = await HkdModel.create(value, pair);

  res.status(200).json(data);
};
