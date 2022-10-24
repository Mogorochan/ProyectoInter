const { Schema, model } = require("mongoose");

const RotacionSchema = Schema({
    periodo: { type: Date}, 
    ingreso: {Number},
    retiro: {Number},
    personalInicio: {Number},
    personalFinal: {Number},
    resultado: {Number},
    meta: {Number}
});

module.exports = model('Rotacion', RotacionSchema);