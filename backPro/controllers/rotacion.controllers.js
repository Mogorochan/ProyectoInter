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
            periodo,
            ingreso,
            retiro, 
            personalInicio,
            personalFinal, 
            resultado,
            meta,
            msg: 'Creación exitosa'
        });
        
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
        });
    }
}

const actualizarRotacion = async(req,res = response)=>{
    
    //Se busca sí hay información
    try {
        const { periodo,ingreso, retiro, personalInicio, personalFinal, resultado, meta } = req.body;
        let rotaciones = await Rotacion.findById(req.params.id);

        if(!rotaciones){
            res.status(404).json({
                ok:false,
                msg:'No se encuentra la rotación'
            });
        }
        rotaciones.periodo = periodo;
        rotaciones.ingreso = ingreso;
        rotaciones.retiro = retiro;
        rotaciones.personalInicio = personalInicio;
        rotaciones.personalFinal = personalFinal;
        rotaciones.resultado = resultado;
        rotaciones.meta = meta;

        rotaciones = await Rotacion.findOneAndUpdate({_id: req.params.id}, rotaciones, {new: true})
        res.json(rotaciones);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: '¡Imposible actualizar'
        });
    }
}

const obtenerUno = async(req, res = response)=>{
    try {
        let rotaciones = await Rotacion.findById(req.params.id);
        
        if(!rotaciones){
            res.status(404).json({
                ok:false,
                msg:'No se encuentra la rotación'
            });
        }

        res.json(rotaciones);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: '¡Imposible obtener'
        });
    }
}

const eliminar = async(req, res = response)=>{
    try {
        let rotaciones = await Rotacion.findById(req.params.id);
        
        if(!rotaciones){
            res.status(404).json({
                ok:false,
                msg:'No se encuentra la rotación'
            });
        }

        await Rotacion.findOneAndRemove({_id: req.params.id})
        res.json({
            ok:true,
            msg: 'El registro fue eliminado exitosamente'
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: '¡Imposible obtener'
        });
    }
}
   
   

module.exports = {
    crearListado,
    mostraRotacion,
    actualizarRotacion,
    obtenerUno,
    eliminar
}