const { response} = require('express');
const  bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

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

        //Generar el Jason web token (JWT)
        const token = await generarJWT(dbUser.id, name);

        //Crear usuario en BD
        await dbUser.save();
        //Generar respuesta exitosa

        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
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

    const { email, password} = req.body;

    try {
        const dbUser = await Usuario.findOne({email});

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: "El email no es válido o no existe, favor revisárlo"
            });
        }
    //Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: "La contraseña no es válida o no existe, favor revisárlo"
            });
        }
    //Generar JWT
        const token = await generarJWT(dbUser.id, dbUser.name);
    //Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Problemas al ingresar, contacte al administrador"
        });
    }
}

const revalidarToken =  async(req, res = response) => {
  
    const { uid} = req;

    //Leer la BD
    const dbUser = await Usuario.findById(uid);


    // Generar el JWT
    const token = await generarJWT( uid, dbUser.name );

    return res.json({
        ok: true,
        uid, 
        name: dbUser.name,
        email: dbUser.email,
        token
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}