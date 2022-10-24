const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./DB/config');
require('dotenv').config();
/* 
*Crear el servidor/ app express*/
const app = express();
//conexión BD
dbConnection()
//Directorio público
app.use(express.static('public'));
//Cors
app.use(cors());
//Lectura y parseo del body
app.use(express.json());



//Rutas
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/rotacion', require('./routes/rotacion.routes'));

//Puerto y conexión al servidor
const Port = process.env.Port || 3000
app.listen(Port, ( ) => {
    
    console.log(`Corriendo el puerto: ${Port} `);
})