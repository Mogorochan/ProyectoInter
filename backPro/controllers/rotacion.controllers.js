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
            msg: '¡imposible crear'
        })
    }

}

const mostraRotacion = async(req,res = response)=>{
    
    try {

        const dbRotacion =  await Rotacion.find();
        res.json(dbRotacion)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Imposible enlistar'
        })
    }
}

const actualizarRotacion = async(req,res = response)=>{
    try {
        const {periodo,ingreso, retiro, personalInicio, personalFinal, resultado, meta} = req.body
        const dbRotacion = await Rotacion.findById(req.params.id);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: '¡Imposible actualizar'
        })
    }
}

    

   
   

module.exports = {
    crearListado,
    mostraRotacion,
    actualizarRotacion
}