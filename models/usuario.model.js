const { DataTypes } = require('sequelize');
const { bdmysql } = require('../database/MariaDbConnection');

const Usuario = bdmysql.define('usuario',
    {
        // Model attributes are defined here
        'id_usuario': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_usuario'
                    // allowNull defaults to true
        },
        'password': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'email': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'numero_telefono': {
            type: DataTypes.NUMBER
            // allowNull defaults to true
        },
        'minibiografia': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'id_persona': {
            type: DataTypes.NUMBER
            // allowNull defaults to true
        },

    }, 
    {
        //Maintain table name don't plurilize
        freezeTableName: true,

        // I don't want createdAt
        createdAt: false,

        // I don't want updatedAt
        updatedAt: false
    }
);



module.exports = {
    Usuario
}
