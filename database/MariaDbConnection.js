const { Sequelize } = require('sequelize');

const bdmysql = new Sequelize(
    'myDb',//La base de Datos
    'mydb',//Usuario
    'mariadb',//Contraseña
    {
        host: 'monorail.proxy.rlwy.net', //Nombre Host
        port: '23251', //Puerto BD
        dialect: 'mysql' //MYSQL
    }
);

const bdmysql1 = new Sequelize(
    'test',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mariadb' //MariaDB
        
    }
);


module.exports = {
    bdmysql,
    bdmysql1
}