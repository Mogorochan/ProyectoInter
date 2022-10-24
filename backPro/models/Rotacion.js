const { Schema, model } = require("mongoose");

const RotacionSchema = Schema({
  periodo: {
    type: String,
    required: true,
  },
  ingreso: {
    type: Number,
    required: true,
  },
  retiro: {
    type: Number,
    required: true,
  },
  personalInicio: {
    type: Number,
    required: true,
  },
  personalFinal: {
    type: Number,
    required: true,
  },
  resultado: {
    type: Number
  },
  meta: {
    type: Number
  },
});

module.exports = model("Rotacion", RotacionSchema);
