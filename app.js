const { response } = require('express');
const express = require('express');

/* 
*Crear el servidor/ app express*/
const app = express();

//get
app.get('/', (require, response)=> {
    response.json({
        ok: true,
        msg: 'Funcionando'
    })
});

//Rutas
const Port = process.env.Port || 3000
app.listen(Port, ( ) => {
    
    console.log(`Corriendo el puerto: ${Port} `);
})