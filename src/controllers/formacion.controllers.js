const Formacion = require("../models/formacion.model");

const getAll = async (req, res, next) => {
  try {
    const formaciones = await Formacion.find();
    res.json(formaciones);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const formaciones = await Formacion.create(req.body);
    res.json(formaciones);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  create,
};
