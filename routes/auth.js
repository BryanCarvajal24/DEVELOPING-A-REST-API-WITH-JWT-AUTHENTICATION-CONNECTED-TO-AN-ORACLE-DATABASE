const { Router } = require('express');

const {loginPost,
} = require('../controllers/auth');

const router = Router();

//Insertar una persona en la tabla de Personas    
router.post('/login',
    loginPost);

module.exports = router;

