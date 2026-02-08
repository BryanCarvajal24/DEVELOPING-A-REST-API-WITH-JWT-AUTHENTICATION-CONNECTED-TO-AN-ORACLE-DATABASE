const { response, request } = require('express')
const { Usuario } = require('../models/usuario.model');

const { bdmysql } = require('../database/MariaDbConnection');

const { Op } = require("sequelize");

//Libreria pa la encryptacion de datos
const bcryptjs = require('bcryptjs');


const usuariosGet = async (req, res = response) => {

    try {
        const unosUsuarios = await Usuario.findAll();

        res.json({
            ok: true,
            data: unosUsuarios
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}

const usuarioByIdGet = async (req = request, res = response) => {

    const { id } = req.params;
    //const { _id, password, google, correo, ...resto } = req.body;

    try {

        const unUsuario = await Usuario.findByPk(id);

        if (!unUsuario) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un Usuario con el id: ' + id
            })
        }

        res.json({
            ok: true,
            data: unUsuario
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }
}



const usuarioPost = async (req, res = response) => {

    const { id_usuario, password, email, numero_telefono, minibiografia, id_persona } = req.body;

    //const datos = req.body;

    //console.log("Datos", datos);



    const usuario = new Usuario({ password, email, numero_telefono, minibiografia, id_persona });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    try {

        const newusuario = await usuario.save();

        usuario.id_usuario = newusuario.null;

        res.json({
            ok: true,
            data: usuario
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}


const usuarioDelete = async (req, res = response) => {
    const { id } = req.params;

    console.log(id);

    try {

        const usuario = await Usuario.findByPk(id);
        //const usuarioAutenticado = req.usuario;

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una usuario con el id: ' + id
            })
        }

        //Borrado Logico.
        //await heroe.update({estado:false});

        //Borrado de la BD
        await usuario.destroy();

        res.json({
            ok: true,
            usuario: usuario,
            //autenticado:usuarioAutenticado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}

const usuarioPut = async (req, res = response) => {

    const { id } = req.params;
    const { body } = req;

    console.log(id);
    console.log(body);

    const { password } = req.body

    try {

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una usuario con el id: ' + id
            })
        }

        if (password) {
            // Encriptar la contraseña
            const salt = bcryptjs.genSaltSync();
            body.password = bcryptjs.hashSync(password, salt);
        }


        await usuario.update(body);

        res.json({ ok: true, data: usuario });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}


module.exports = {
    usuariosGet,
    usuarioByIdGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}
