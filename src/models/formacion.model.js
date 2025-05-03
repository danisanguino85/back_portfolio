const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    estudios: String,
    entidad: String,
    descripcion: String,
    fecha: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Education = model("Education", educationSchema);

module.exports = Education;
