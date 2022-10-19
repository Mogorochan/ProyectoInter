const { response} = require('express');
const  bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario =  async(req, res = response) => {
 
    const {name, email, password} = req.body;
    try {
        const usuario = await Usuario.findOne({email}); //*verificación email

        if (usuario) {
            return res.status(404).json({
                ok: false,
                msg: "El usuario ya existe con ese email, por favor ingresar otro"
            });
        }
        //Crear usuario con el modelo
        const dbUser = new Usuario(req.body);
        
        //Encriptar la contraseña(por medio del hash)
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password,salt);

        //Crear usuario en BD
        await dbUser.save();
        //Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Algo falló!'
        });
    }
  
}


const loginUsuario = async(req, res = response) => {

    return res.jason({
        ok: true,
        msg: ' usuario'
    })
    return res.status(400).json({
        ok: false,
        msg: "El email no es válido o no existe, favor revisárlo"
    });
}

const revalidarToken =  async(req, res = response) => {
  
    return res.status(400).json({
        ok: false,
        msg: "token"
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}