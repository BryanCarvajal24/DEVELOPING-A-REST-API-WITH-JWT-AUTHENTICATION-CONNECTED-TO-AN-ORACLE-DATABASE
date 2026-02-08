const { Router } = require('express');

const { validarJWT} = require('../middlewares/validar-jwt');


const { usuariosGet,
    usuarioByIdGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
} = require('../controllers/usuario');

const router = Router();

//Consulta de todos los Usuarios    
router.get('/',
    usuariosGet);

//Consulta de todos los Usuarios    
router.get('/:id',
    usuarioByIdGet);

router.post('/',
    usuarioPost);

router.put('/:id',
    validarJWT,
    usuarioPut);

router.delete('/:id',
    validarJWT,
    usuarioDelete);

module.exports = router;