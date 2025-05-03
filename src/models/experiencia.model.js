const { Schema, model } = require("mongoose");

const experienciaSchema = new Schema(
  {
    puesto: String,
    empresa: String,
    descripcion: String,
    fecha: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Experiencia = model("experiencia", experienciaSchema);

module.exports = Experiencia;
