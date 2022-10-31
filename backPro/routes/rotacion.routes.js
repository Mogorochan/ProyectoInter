const { Router } = require('express');
const { check } = require('express-validator');
const {crearListado, mostraRotacion, actualizarRotacion, obtenerUno, eliminar} = require('../controllers/rotacion.controllers');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/agregar', [
    check('periodo', 'El periodo es obligatorio').not().isEmpty(),
    check('ingreso', 'El ingreso es obligatorio').not().isEmpty().isLength({min: 1}),
    check('retiro', 'El retiro es obligatorio').not().isEmpty().isLength({min: 1}),
    check('personalInicio', 'El personal de inicio es obligatorio').not().isEmpty().isLength({min: 1}),
    check('personalFinal', 'El personal final es obligatorio').not().isEmpty().isLength({min: 1}),
    validarCampos
], crearListado);

router.get('/', mostraRotacion);
router.put('/editar/:id', actualizarRotacion);
router.get('/buscar/:id', obtenerUno);
router.delete('/editar/:id', eliminar);

module.exports = router;

