const { response} = require('express');
const Rotacion = require('../models/Rotacion')

const crearListado = async(req,res = response)=>{
    const {periodo,ingreso, retiro, personalInicio, personalFinal, resultado, meta} = req.body

    try {
        const dbRotacion = new Rotacion(req.body);
        await dbRotacion.save();

        //Respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbRotacion.id,
            periodo,ingreso,retiro, 
            personalInicio,personalFinal, 
            resultado,meta,
            msg: 'Creación exitosa'
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: '¡Algo falló!'
        })
    }

}

const mostraRotacion = async(req,res = response)=>{
    

    const dbRotacion = await Rotacion.findById(id);
    return res.status(201).json({
        ok: true,
        uid: dbRotacion.id,
        periodo,ingreso,retiro, 
        personalInicio,personalFinal, 
        resultado,meta,
        msg: 'Creación exitosa'
    })
}

module.exports = {
    crearListado,
    mostraRotacion
}