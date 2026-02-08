const { Router } = require('express');
const { validarJWT} = require('../middlewares/validar-jwt');

const { personasGet,
        personaByIdGet,
        personasComoGet,
        personasComo1Get,
        personaPost,
        personaDelete,
        personaPut
} = require('../controllers/prueba');

const router = Router();

//Seleccionar todas las personas
router.get('/',
    personasGet);

//Seleccionar una persona    
router.get('/:id',
    personaByIdGet);



//http://localhost:8082/api/personas/buscar/mar
//Seleccionar personas por un termino en los nombres o los apellidos
router.get('/buscar/:termino',
    personasComoGet);

router.get('/buscar1/:termino',
    personasComo1Get);


//Insertar una persona en la tabla de Personas    
router.post('/',
    validarJWT,
    personaPost);

//Eliminar una persona en la tabla de Personas
router.delete('/:id',
    personaDelete);

//Modificar una persona en la tabla de Personas
router.put('/:id',
    personaPut);

module.exports = router;
