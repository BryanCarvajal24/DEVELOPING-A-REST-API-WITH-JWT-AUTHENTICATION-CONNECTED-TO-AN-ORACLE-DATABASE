/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Mundo a todos...')
})

app.listen(8080)
console.log('Corriendo en el puerto 8080');
*/


require('dotenv').config();

const Server = require('./models/server')

const server = new Server();

server.listen();