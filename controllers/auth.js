const { response, request } = require('express')
const { Usuario} = require('../models/usuario.model');

const bcryptjs = require('bcryptjs');

const { generarJWT } = require("../helpers/generar-jwt");



//const { bdmysql } = require('../database/MariaDbConnection');
//const { Op } = require("sequelize");


const loginPost = async (req, res = response) => {

    const { correo, password } = req.body;
 
    try {

        var condicion = {where : {email:correo}}

        const usuario = await Usuario.findOne(condicion);

        //console.log(usuario);

        if(!usuario){
            return res.status(400).json({ok:false,
                msg: 'Usuario no es correcto para el email ' + correo
            })
        }

        const validaPassword = bcryptjs.compareSync( password, usuario.password );
        // Verificar la contraseña

        if (!validaPassword) {
            return res.status(400).json({ok:false,
                msg: 'Usuario / Password no son correctos - password'
            })
        }

        /*
        if (usuario.password !== password){
            return res.status(400).json({ok:false,
                msg: 'El password no es correcto para el email ' + correo
            })
        }
        */

        /*
        const validaPasword = bcryptjs.compareSync(password,usuario.password);

        if(!validaPasword){
            return res.status(400).json({ok:false,
                msg: 'El password no es correcto para el email ' + correo
            })
        }
        */ 
        
        const token = await generarJWT(usuario.id_usuario);
        

        res.json({ok:true,
            msj:'Login OK',
            token:token
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            error:error.msj
        })
    }

}

module.exports = {
    loginPost,
}


