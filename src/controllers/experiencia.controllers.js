const Experiencia = require("../models/experiencia.model");

const getAll = async (req, res, next) => {
  try {
    const experiencias = await Experiencia.find();
    res.json(experiencias);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const experiencias = await Experiencia.create(req.body);
    res.json(experiencias);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
