const { Router } = require('express');
const { check } = require('express-validator');
const {crearListado} = require('../controllers/rotacion.controllers');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/listado', [
    check('periodo', 'El periodo es obligatorio').not().isEmpty(),
    check('ingreso', 'El ingreso es obligatorio').not().isEmpty().isLength({min: 1}),
    check('retiro', 'El retiro es obligatorio').not().isEmpty().isLength({min: 1}),
    check('personalInicio', 'El personal de inicio es obligatorio').not().isEmpty().isLength({min: 1}),
    check('personalFinal', 'El personal final es obligatorio').not().isEmpty().isLength({min: 1}),
    validarCampos
], crearListado);

module.exports = router;