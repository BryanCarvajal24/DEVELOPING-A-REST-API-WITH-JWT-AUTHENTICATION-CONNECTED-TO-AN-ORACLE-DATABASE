const { DataTypes } = require('sequelize');
const { bdmysql } = require('../database/MariaDbConnection');


const Personas = bdmysql.define('persona',
    {
        // Model attributes are defined here
        'id_persona': {
            type: DataTypes.INTEGER,
            //allowNull: false,
            primaryKey: true
        },

        'nombres': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'apellidos': {
            type: DataTypes.STRING,
            allowNull: false
            // allowNull defaults to true
        },
        'fecha_nacimiento': {
            type: DataTypes.DATE,
            allowNull: false

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


const PersonaBk = bdmysql.define('PersonaBk', {
    id_persona: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombres: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: true // Puedes ajustar esto según tus necesidades
    }
}, {
    tableName: 'persona_bk',
    timestamps: false // Si no necesitas los campos de createdAt y updatedAt
});

module.exports = {
    Personas,
    PersonaBk
}

